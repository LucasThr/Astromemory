import { ScreenLayout } from "../../layouts/screen.layout";
import { ActivityIndicator, Text, View } from "react-native";
import { mainstyles } from "../../assets/style/style";
import { Bloc } from "../multiplayers/components/bloc";
import { useEffect, useState } from "react";
import { questionService } from "../../services/question.service";
import { shuffle } from "../../helpers/game.helper";
import Timer from "../../components/timer";
import { roomService } from "../../services/room.service";
import { Answer } from "../../interfaces/questions";
import { CommonNavigatorParams, NavigationProp } from "../../router/types";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

export const QuestionsSolo = () => {
  const route = useRoute<RouteProp<CommonNavigatorParams, "QuestionsSolo">>();
  const navigation = useNavigation<NavigationProp>();
  const { questions_list, username } = route.params;

  const [question, setQuestion] = useState<string | undefined>(undefined);
  const [stepQuestion, setStepQuestion] = useState(0);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState<Answer[]>([]);
  const [reveal, setReveal] = useState(false);
  const [score, setScore] = useState(0);
  const [timerCount, setTimer] = useState<number>(200);
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
    getQuestion(questions_list[0]);
  }, []);

  const validateResponse = async (response: Answer) => {
    setReveal(true);
    let timeToScore = (timerCount / 200) * 1000;
    if (response.isRight) {
      setScore((score) => score + 100 + timeToScore);
      // const addPoints = await roomService.addPoints(room_user.id, score + 1000);
      // if (addPoints.error) setError("Erreur lors de l'ajout des points");
    } else {
      console.log("Mauvaise réponse");
    }

    if (stepQuestion >= questions_list.length - 1) {
      navigation.navigate("ResultSolo", { score, username });
      return;
    }
    console.log("score", score);
    setTimer(200);
    setTimeout(() => {
      setReveal(false);
      getQuestion(questions_list[stepQuestion + 1]);
      setStepQuestion(stepQuestion + 1);
    }, 1000);
  };

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
          Questions {stepQuestion + 1} / {questions_list.length}
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
