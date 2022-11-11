import { useState } from "react";
import {
    View,
    ScrollView,
    TouchableOpacity,
    Modal,
    Text,
    TextInput,
    FlatList
} from "react-native";
import Header from "../../components/Header";
import { CaretLeft, Chats, Lightbulb } from "phosphor-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PlayParamList } from "../../@types/navigation";
import { RouteProp } from "@react-navigation/native";

import Font from "../../components/Font";
import Category from "./Category";

import styles from "./styles";
import levels from "../../utils/levels";

import Progress from "./Progress";
import WordList from "./WordList";
import Found from "./Found";
import Playing from "./Playing";
import Guess from "./Guess";
import Empty from "../../components/Empty";
import theme from "../../utils/theme";

interface GameProps {
    navigation: NativeStackNavigationProp<PlayParamList, "Game">;
    route: RouteProp<{ params: {id: number, season: "summer" | "falls" | "winter" | "spring"} }>;
}

export default function Game({ navigation, route }: GameProps) {
    const level = levels.find(l => l.id == route.params.id);
    const [playing, setPlaying] = useState("");

    if (!level) {
        navigation.goBack();
        return null;
    }

    return (
        <View style={styles.container}>
            <Playing
                visible={!!playing}
                onRequestClose={() => setPlaying("")}
                word={playing}
            />
            <Header
                title={`${level.id + 1}. ${level.question}`}
                leftOptions={[{
                    icon: <CaretLeft/>,
                    onPress: navigation.goBack
                }]}
                hideFloat
            />
            <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
                <Progress
                
                />
                <Font name="seasons" style={styles.question}>{level.question}</Font>
                <Category subtitle="Dê palpites">
                    <Guess />
                </Category>
                <Category noPadding subtitle="Jogo de letras">
                    <WordList
                        play={(word: string) => setPlaying(word)}
                        level={level}
                        {...level}
                    />
                </Category>
                
                <Category subtitle="Palavras já encontradas" >
                    <Empty
                        icon={<Lightbulb size={24} color={theme.colors.font} />}
                        title="Nada encontrado ainda"
                        desc="Você ainda não encontrou nenhuma palavra."
                    />
                    <Found
                        word="Vasco"
                        tries={2}
                        index={15}
                    />
                </Category>
                <Category subtitle="Palpites já feitos">
                    <Empty
                        icon={<Chats size={24} color={theme.colors.font} weight="duotone" />}
                        title="Sem palpites"
                        desc="Você ainda não deu nenhum palpite. Escreva qualquer coisa!"
                    />
                </Category>
            </ScrollView>
        </View>
    );
}
