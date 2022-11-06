import {
    View,
    ScrollView,
    TouchableOpacity,
    Modal,
    Text,
    TextInput
} from "react-native";
import Header from "../../components/Header";
import { CaretLeft, X, Check } from "phosphor-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PlayParamList } from "../../@types/navigation";
import { RouteProp } from "@react-navigation/native";

import Font from "../../components/Font";

import styles from "./styles";
import levels from "../../utils/levels";
import Category from "./Category";
import Guess from "./Guess";
import Input from "./Input";
import Question from "./Question";
import Progress from "./Progress";
import Word from "./Word";
import { useState } from "react";
import theme from "../../utils/theme";
import Termo from "../../games/Termo";

interface GameProps {
    navigation: NativeStackNavigationProp<PlayParamList, "Game">;
    route: RouteProp<{ params: {id: number, season: "summer" | "falls" | "winter" | "spring"} }>
}

export default function Game({ navigation, route }: GameProps) {
    const level = levels.find(l => l.id == route.params.id);
    const [openGuess, setOpenGuess] = useState(false);

    const [guessText, setGuessText] = useState("");

    if (!level) {
        navigation.goBack();
        return null;
    }

    return (
        <View style={styles.container}>
            <Termo visible={true} word="toque" />
            <Modal visible={openGuess} animationType="slide" onRequestClose={() => setOpenGuess(false)}>
                <View style={styles.guessModalContent}>
                    <View style={styles.guessModalHeader}>
                        <TouchableOpacity style={{ padding: 10 }} onPress={() => setOpenGuess(false)}>
                            <X color={theme.colors.font} />
                        </TouchableOpacity>
                        <TextInput style={styles.guessModalInput} placeholder="Dê um palpite..." />
                        <TouchableOpacity style={{ padding: 10 }}>
                            <Check color={theme.colors.font} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{ padding: 20, paddingTop: 0 }}>
                        <Category subtitle="Palpites já feitos (576)"></Category>
                    </ScrollView>
                </View>
            </Modal>

            <Header title={`#${level.id + 1}. ${level.question}`} hideFloat leftOptions={[{
                icon: (
                    <TouchableOpacity onPress={navigation.goBack}>
                        <CaretLeft/>
                    </TouchableOpacity>
                )
            }]} />
            <ScrollView>
                <Progress />
                <View style={{ padding: 20 }}>
                    <Question question={level.question} />
                    <Input onPress={() => setOpenGuess(true)} />
                    <Category subtitle="Encontre com palavras" contentContainerStyle={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <Word text="Vasco" index={1} done key={1} />
                        <Word text="Bolsonaro" index={2} key={2} />
                    </Category>
                    <Category subtitle="Palavras encontradas">
                        <Guess word="Quente" source="Palavras parecidas" pos={1} />
                    </Category>
                </View>
            </ScrollView>
        </View>
    );
}
