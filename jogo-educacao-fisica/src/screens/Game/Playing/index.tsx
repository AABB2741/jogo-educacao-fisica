import { useState } from "react";
import { ArrowRight, CheckCircle, Question, X } from "phosphor-react-native";
import {
    Modal,
    ModalProps,
    ScrollView,
    TextInput,
    View,
    TouchableOpacity
} from "react-native";
import { useStorage } from "../../../contexts/storage";

import { LevelProp, WordProps } from "../../../interfaces/level";

import Font from "../../../components/Font";
import Header from "../../../components/Header";
import theme from "../../../utils/theme";

import styles from "./styles";
import Row from "../Row";
import { LevelProgress } from "../../../@types/progress";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props extends ModalProps {
    word: string;
    tries: string[];
    level: LevelProp;
    data: LevelProgress;
}

export default function Playing({ level, data, word, tries, ...rest }: Props) {
    const { storage, setStorage } = useStorage();
    const [guess, setGuess] = useState("");
    
    let index = level.words.findIndex(w => w.word == word);
    
    if (index < 0)
        return null;

    let wordData = level.words[index];
    let found = (data.found ?? []).includes(wordData.index);

    function handleGuess() {
        if (!data.termoGuesses) {
            data.termoGuesses = [];
        }

        // let newStorage = { ...storage };
        // console.log(newStorage);
        let levelIndex = storage.levels?.findIndex(l => l.id == level.id) ?? 0;
        let newStorage = { ...storage };
        
        if (!newStorage.levels) {
            newStorage.levels = [level];
        }

        let newData = { ...data };
        newData.termoGuesses?.push({
            index,
            word: guess
        });

        setGuess("");
        newStorage.levels[levelIndex] = newData;
        setStorage(newStorage);
        AsyncStorage.setItem("progress", JSON.stringify(newStorage));
    }

    function createRows() {
        let guesses = data.termoGuesses?.filter(t => t.index == index);
        let res = [];

        for (let i = 0; i < 6; i++) {
            res.push(
                <Row word={word} guess={guesses?.[i]?.word ?? ""} rowNumber={i} key={i} />
            )
        }

        return res;
    }
    
    return (
        <Modal {...rest} animationType="slide">
            <Header
                hideFloat
                title="Dê um palpite"
                leftOptions={[{
                    icon: <X color={theme.colors.font} />,
                    onPress: rest.onRequestClose
                }]}
                rightOptions={[{
                    icon: <Question color={theme.colors.font} />
                }]}
            />
            <ScrollView style={styles.container}>
                <View style={[styles.doneContainer, !found && { display: "none" }]}>
                    <View style={styles.doneContent}>
                        <CheckCircle weight="fill" />
                        <Font name="title" style={styles.done}>Palavra encontrada</Font>
                    </View>
                    <Font name="coins" style={{ color: theme.colors.check }}>{`${wordData.percent.toFixed(0)}%`}</Font>
                </View>
                <View style={styles.questionContainer}>
                    <Font name="seasons">{level.question}</Font>
                </View>
                <View>
                    {createRows()}
                </View>
                <View style={[styles.inputContainer, found && { display: "none" }]}>
                    <TextInput
                        maxLength={word.length}
                        style={styles.input}
                        placeholder="O que você está pensando?"
                        value={guess}
                        onChangeText={text => setGuess(text)}
                        onSubmitEditing={handleGuess}
                    />
                    <TouchableOpacity style={styles.submit} onPress={handleGuess}>
                        <ArrowRight color={theme.colors.font} size={16} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Modal>
    );
}
