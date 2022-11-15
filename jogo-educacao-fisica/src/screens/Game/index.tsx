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
import { CaretLeft, Chats, Database, Lightbulb } from "phosphor-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PlayParamList } from "../../@types/navigation";
import { RouteProp } from "@react-navigation/native";
import { useStorage } from "../../contexts/storage";

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
import normalize from "../../utils/normalize";
import { LevelProgress } from "../../@types/progress";

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
    
    const { storage, save } = useStorage();
    let data: LevelProgress = {
        ...(storage.levels?.find(l => l.id == level.id) ?? { id: level.id })
    }
    function handleGuess(guess: string) {
        if (!level)
            return;

        if (!data.guesses)
            data.guesses = [];

        if (!data.found)
            data.found = [];

        for (let g of data.guesses) {
            if (normalize(g).toLowerCase() == normalize(guess).toLowerCase()) {
                return;
            }
        }

        let hasFound = false;
        for (let w of level.words) {
            if (normalize(w.word).toLowerCase() == normalize(guess).toLowerCase()) {
                if (!data.found.includes(w.index)) {
                    data.found.push(w.index);
                    hasFound = true;
                    break;
                } else return;
            }
        }

        if (!hasFound) {
            data.guesses.push(guess);
        }
        
        save({
            levelID: level.id,
            data
        });
    }
    
    return (
        <View style={styles.container}>
            <Playing
                visible={!!playing}
                onRequestClose={() => setPlaying("")}
                word={playing}
                percent={level?.words?.find(w => w.word == playing)?.percent ?? 0}
                question={level.question}
            />
            <Header
                title={`${level.id + 1}. ${level.question}`}
                leftOptions={[{
                    icon: <CaretLeft />,
                    onPress: navigation.goBack
                }]}
                rightOptions={[{
                    icon: <Database />,
                    onPress: () => console.log(storage)
                }]}
                hideFloat
            />
            <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
                <Progress
                
                />
                <Font name="seasons" style={styles.question}>{level.question}</Font>
                <Category subtitle="Dê palpites">
                    <Guess
                        send={handleGuess}
                    />
                </Category>
                <Category noPadding subtitle="Jogo de letras">
                    <WordList
                        words={level.words}
                        data={data}
                        play={setPlaying}
                    />
                </Category>
                
                <Category subtitle="Palavras já encontradas" reverse>
                    <Empty
                        icon={<Lightbulb size={24} color={theme.colors.font} />}
                        title="Nada encontrado ainda"
                        desc="Você ainda não encontrou nenhuma palavra."
                        visible={!(data.found ?? []).length}
                    />
                    {data.found?.map((word, index) => (
                        <Found
                            word={level.words.find(w => w.index == word)?.word ?? ""}
                            index={index}
                            key={index}
                            check
                        />
                    ))}
                </Category>
                <Category subtitle="Palpites já feitos" reverse>
                    <Empty
                        icon={<Chats size={24} color={theme.colors.font} weight="duotone" />}
                        title="Sem palpites"
                        desc="Você ainda não deu nenhum palpite. Escreva qualquer coisa!"
                        visible={!(data.guesses || []).length}
                    />
                    {data.guesses?.map((guess, index) => (
                        <Found
                            word={guess}
                            index={index}
                            key={index}
                        />
                    ))}
                </Category>
            </ScrollView>
        </View>
    );
}
