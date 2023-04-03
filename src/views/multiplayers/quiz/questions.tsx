import { ScreenLayout } from "../../../layouts/screen.layout";
import { Text, View } from "react-native";
import { Header } from "../../../components/header";
import { mainstyles } from "../../../assets/style/style";
import { Time } from "../components/time";
import { Bloc } from "../components/bloc";
import { useEffect, useState } from "react";
import { questionService } from "../../../services/question.service";
import { shuffle } from "../../../helpers/game.helper";
import { useRoute } from "@react-navigation/native";

export const Questions = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { room } = route.params;

  const [question, setQuestion] = useState(null);
  const [actuelQuestion, setActuelQuestion] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState([]);
  const getQuestion = async (index: number) => {
    console.log("index", index);
    setLoading(true);
    let { data: dataQuestion, error } = await questionService.getOne(index);
    console.log("dataQuestions", dataQuestion);
    setQuestion(dataQuestion.question);
    let resp = [
      { isRight: true, answer: dataQuestion.answer },
      { isRight: false, answer: dataQuestion.wrong_answer[0] },
      { isRight: false, answer: dataQuestion.wrong_answer[1] },
    ];
    console.log("resp", resp);
    setResponses(shuffle(resp));
    setLoading(false);
  };
  useEffect(() => {
    getQuestion(0);
  }, []);

  const validateResponse = (response: string) => {
    if (response.isRight) {
      console.log("room", room);
      console.log("route.params", route.params);
      console.log("Bonne réponse");
    } else {
      console.log("Mauvaise réponse");
    }
    console.log("response", response);
    if (actuelQuestion > room.questions_list.length - 1) {
      navigation.navigate("ResultMulti", { room: room });
      return;
    }

    setTimeout(() => {
      getQuestion(room.questions_list[actuelQuestion + 1]);
      setActuelQuestion(actuelQuestion + 1);
    }, 100);
  };

  return (
    <ScreenLayout>
      <Header />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={[
            mainstyles.title,
            mainstyles.textcenter,
            { fontWeight: "400" },
          ]}
        >
          Questions 1
        </Text>
        <Text
          style={[mainstyles.title, mainstyles.textcenter, { marginTop: 40 }]}
        >
          {question}
        </Text>
        <Time />
        <View style={{ gap: 32 }}>
          {responses.map((response, index) => (
            <Bloc
              onPress={() => validateResponse(response)}
              title={response.answer}
              key={index}
            />
          ))}
        </View>
      </View>
    </ScreenLayout>
  );
};
