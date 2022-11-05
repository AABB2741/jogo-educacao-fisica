import {
    View,
    ScrollView,
    TouchableOpacity
} from "react-native";
import Header from "../../components/Header";
import { CaretLeft } from "phosphor-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PlayParamList } from "../../@types/navigation";
import { RouteProp } from "@react-navigation/native";

import Font from "../../components/Font";

import styles from "./styles";
import levels from "../../utils/levels";
import Category from "./Category";
import Guess from "./Guess";
import Input from "./Input";

interface GameProps {
    navigation: NativeStackNavigationProp<PlayParamList, "Game">;
    route: RouteProp<{ params: {id: number, season: "summer" | "falls" | "winter" | "spring"} }>
}

export default function Game({ navigation, route }: GameProps) {
    const level = levels.find(l => l.id == route.params.id);

    if (!level)
        return navigation.goBack();

    return (
        <View style={styles.container}>
            <Header title={`#${level.id + 1}. ${level?.question}`} hideFloat leftOptions={[{
                icon: (
                    <TouchableOpacity onPress={navigation.goBack}>
                        <CaretLeft/>
                    </TouchableOpacity>
                )
            }]} />
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                <View>
                    <View>
                        <Font name="text" style={styles.try}>O que vem em sua mente?</Font>
                        <Font name="seasons" style={styles.question}>{level.question}</Font>
                    </View>
                </View>
                <Input />
                <Category subtitle="Palavras encontradas">
                    <Guess word="Quente" source="Palavras parecidas" pos={1} />
                </Category>
            </ScrollView>
        </View>
    );
}
