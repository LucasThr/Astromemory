import { ScreenLayout } from "../../layouts/screen.layout";
import { ActivityIndicator, Text, View } from "react-native";
import { mainstyles } from "../../assets/style/style";
import { Bloc } from "./components/bloc";
import { useEffect, useState } from "react";
import { questionService } from "../../services/question.service";
import { shuffle } from "../../helpers/game.helper";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import Timer from "../../components/timer";
import { roomService } from "../../services/room.service";
import { Answer } from "../../interfaces/questions";
import { CommonNavigatorParams, NavigationProp } from "../../router/types";
import { supabase } from "../../libs/supabase";

export const Questions = () => {
  const route = useRoute<RouteProp<CommonNavigatorParams, "Questions">>();
  const navigation = useNavigation<NavigationProp>();
  const { room, room_user } = route.params;

  const [question, setQuestion] = useState<string | undefined>(undefined);
  const [stepQuestion, setStepQuestion] = useState(0);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState<Answer[]>([]);
  const [reveal, setReveal] = useState(false);
  const [score, setScore] = useState(0);
  const [timerCount, setTimer] = useState<number>(200);
  const [locked, setLocked] = useState(false);

  const getQuestion = async (index: number) => {
    setLoading(true);
    let { data: dataQuestion, error } = await questionService.getOne(index);
    if (
      error ||
      !dataQuestion ||
      !dataQuestion.question ||
      !dataQuestion.answer ||
      !dataQuestion.wrong_answer
    )
      return setError("Erreur lors de la récupération de la question");
    setQuestion(dataQuestion.question);
    let resp = [
      { isRight: true, answer: dataQuestion.answer },
      { isRight: false, answer: dataQuestion.wrong_answer[0] },
      { isRight: false, answer: dataQuestion.wrong_answer[1] },
    ];
    setResponses(shuffle(resp));
    setLoading(false);
  };
  useEffect(() => {
    getQuestion(room.questions_list[0]);
  }, []);

  const validateResponse = async (response: Answer) => {
    setReveal(true);
    console.log("stopTime", timerCount);
    let timeToScore = (timerCount / 200) * 1000;
    // console.log("timeFix", timeToScore);
    if (response.isRight) {
      console.log("Bonne réponse");
      setScore((score) => score + 100 + timeToScore);
      const addPoints = await roomService.addPoints(room_user.id, score + 1000);
      if (addPoints.error) setError("Erreur lors de l'ajout des points");
    } else {
      console.log("Mauvaise réponse");
    }
    if (!room_user.user_id) return;
    await roomService.setUserToReady(
      room.id,
      room_user.user_id,
      stepQuestion + 1
    );
  };

  useEffect(() => {
    console.log("room.id", room.id);
    supabase
      .channel("public:rooms:id=eq." + room.id)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "rooms" },
        (payload) => {
          console.log("Change received! ROOM WRITE ANSWER");
          if (payload?.new?.step == stepQuestion + 1) {
            roomService.setUserToNotReady(room_user.user_id);
            if (stepQuestion >= room.questions_list.length - 1) {
              supabase.removeAllChannels();
              navigation.navigate("ResultMulti", { room: room });
              return;
            }
            setReveal(false);
            setTimer(200);
            setTimeout(() => {
              getQuestion(room.questions_list[stepQuestion + 1]);
              setStepQuestion((step) => step + 1);
            }, 1000);
          }
        }
      )
      .subscribe(async (message) => {
        console.log("message", message);
      });
  }, [stepQuestion]);

  const getTime = (time: number) => {
    setTimer(time);
  };
  return (
    <ScreenLayout>
      {/* <Header /> */}
      <Text style={{ fontSize: 24, color: "white", textAlign: "right" }}>
        Score : <Text style={{ fontWeight: "bold" }}>{score.toString()}</Text>
      </Text>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={[
            mainstyles.title,
            mainstyles.textcenter,
            { fontWeight: "400" },
          ]}
        >
          Questions {stepQuestion + 1} / {room.questions_list.length}
        </Text>

        {loading ? (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator />
          </View>
        ) : (
          <View>
            <Text
              style={[
                mainstyles.title,
                mainstyles.textcenter,
                { marginTop: 40, marginBottom: 30 },
              ]}
            >
              {question}
            </Text>
            <Timer
              timerCount={timerCount}
              setTimer={getTime}
              key={stepQuestion}
              stop={reveal}
              onFinish={() => {
                console.log("reveal", reveal);
                if (!reveal) validateResponse({ isRight: false });
              }}
            />
            <View style={{ gap: 32, marginBottom: 40 }}>
              {responses.map((response, index) => (
                <Bloc
                  reveal={reveal}
                  onPress={() => validateResponse(response)}
                  data={response}
                  key={index}
                />
              ))}
            </View>
          </View>
        )}
      </View>
    </ScreenLayout>
  );
};
