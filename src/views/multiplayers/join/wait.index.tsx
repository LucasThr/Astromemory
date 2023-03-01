import { Text } from "react-native"
import { ScreenLayout } from "../../../layouts/screen.layout";
import { mainstyles } from "../../../assets/style/style";
import { List } from "../components/list";

export const Wait = () => {
    return(
        <ScreenLayout>
            <Text style={[mainstyles.title, mainstyles.textcenter]}>Salle d'attente :</Text>
            <Text style={[mainstyles.title, mainstyles.textcenter, {marginBottom: 40}]}>123456</Text>
            <List />
        </ScreenLayout>
    )
}