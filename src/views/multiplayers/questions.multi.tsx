import { ScreenLayout } from "../../layouts/screen.layout";
import { ActivityIndicator, Text, View } from "react-native";
import { mainstyles } from "../../assets/style/style";
import { Bloc } from "./components/bloc";
import { useEffect, useState } from "react";
import { questionService } from "../../services/question.service";
import { shuffle } from "../../helpers/game.helper";
import { useRoute } from "@react-navigation/native";
import Timer from "../../components/timer";
import { roomService } from "../../services/room.service";

export const Questions = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { room, room_user } = route.params;

  const [question, setQuestion] = useState(null);
  const [stepQuestion, setStepQuestion] = useState(0);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState<number[] | string[]>([]);
  const [reveal, setReveal] = useState(false);
  const [score, setScore] = useState(0);
  const [timerCount, setTimer] = useState<number>(200);
  const [stopTime, setStopTime] = useState<null | number>(null);
  const getQuestion = async (index: number) => {
    setLoading(true);
    let { data: dataQuestion, error } = await questionService.getOne(index);
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

  const validateResponse = async (response: string) => {
    setReveal(true);
    console.log("stopTime", stopTime);
    let timeToScore = (stopTime / 200) * 1000;
    // console.log("timeFix", timeToScore);
    if (response.isRight) {
      console.log("Bonne réponse");
      setScore((score) => score + 100 + timeToScore);
      const addPoints = await roomService.addPoints(room_user.id, score + 1000);
      if (addPoints.error) setError("Erreur lors de l'ajout des points");
    } else {
      console.log("Mauvaise réponse");
    }

    if (stepQuestion >= room.questions_list.length - 1) {
      navigation.navigate("ResultMulti", { room: room });
      return;
    }
    console.log("score", score);
    setTimer(200);
    setTimeout(() => {
      setStopTime(null);
      setReveal(false);
      getQuestion(room.questions_list[stepQuestion + 1]);
      setStepQuestion(stepQuestion + 1);
    }, 1000);
  };

  const getTime = (time: number) => {
    setTimer(time);
  };
  return (
    <ScreenLayout>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <Text
          style={[
            mainstyles.title,
            mainstyles.textcenter,
            { fontWeight: "400" },
          ]}
        >
          {stepQuestion + 1} / {room.questions_list.length}
        </Text>
        <Text
          style={[
            mainstyles.title,
            mainstyles.textcenter,
            { fontWeight: "400" },
          ]}
        >
          Questions 1
        </Text>
        <View
          style={{
            height: 30,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, color: "white" }}>
            Score : {score.toString()}
          </Text>
        </View>

        {loading ? (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text
              style={[
                mainstyles.title,
                mainstyles.textcenter,
                { marginTop: 40 },
              ]}
            >
              {question}
            </Text>
            <Timer
              setStopTime={setStopTime}
              key={stepQuestion}
              stop={reveal}
              onFinish={() => {
                console.log("reveal", reveal);
                if (!reveal) validateResponse({ isRight: false });
              }}
            />
            <View style={{ gap: 32 }}>
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
