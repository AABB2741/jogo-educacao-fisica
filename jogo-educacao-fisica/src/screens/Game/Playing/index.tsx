import { useState } from "react";
import { ArrowRight, CheckCircle, Question, X, XCircle } from "phosphor-react-native";
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
import * as Storage from "../../../utils/storage";
import normalize from "../../../utils/normalize";
import { carve } from "../../../utils/characters";

interface Props extends ModalProps {
    word: string;
    wordId: number;
    tries: string[];
    level: LevelProp;
    data: LevelProgress;
}

export default function Playing({ level, data, word, wordId, tries, ...rest }: Props) {
    const { storage, setStorage } = useStorage();
    const [guess, setGuess] = useState("");
    const [error, setError] = useState(false);
    
    let index = level.words.findIndex(w => w.word == word);
    
    if (index < 0)
        return null;
    let wordData = level.words[index];
    let found = (data.found ?? []).includes(wordData.index);
    let limitReach = (data.termoGuesses ?? []).filter(t => t.index == index).length >= 6;

    function handleGuess() {
        if (guess.length < word.length) {
            setError(true);
            return;
        }

        setError(false);
        if (!data.termoGuesses) {
            data.termoGuesses = [];
        }

        // let levelIndex = storage.levels?.findIndex(l => l.id == level.id) ?? -1;
        let newStorage = { ...storage };
        
        if (!newStorage.levels) {
            newStorage.levels = [data];
        }

        let newData = { ...data };
        newData.termoGuesses?.push({
            index,
            word: guess
        });

        if (normalize(guess).toLowerCase() == normalize(word).toLowerCase()) {
            if (!newData.found)
                newData.found = [];
            newData.found?.push(wordId);
        }

        setGuess("");
        let levelIndex = newStorage.levels.findIndex(l => l.id == level.id);
        if (levelIndex == -1) {
            newStorage.levels.push(newData);
        } else {
            newStorage.levels[levelIndex] = newData;
        }
        setStorage(newStorage);
        Storage.setItem("progress", newStorage);
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
                <View style={[styles.doneContainer, (!found && limitReach) && { backgroundColor: theme.colors.err_background }, (!found && !limitReach) && { display: "none" }]}>
                    <View style={styles.doneContent}>
                        {found ? <CheckCircle weight="fill" /> : <XCircle weight="fill" />}
                        <Font name="title" style={styles.done}>{found ? "Palavra encontrada" : "Limite atingido de tentativas"}</Font>
                    </View>
                    <Font name="coins" style={{ color: found ? theme.colors.check : theme.colors.err }}>{`${wordData.percent.toFixed(0)}%`}</Font>
                </View>
                <View style={styles.questionContainer}>
                    <Font name="seasons" style={styles.question}>{level.question}</Font>
                </View>
                <View>
                    {createRows()}
                </View>
                <Font name="desc" style={[styles.error, !error && { display: "none" }]}>{`Insira uma palavra com ${word.length} ${word.length == 1 ? "caractere" : "caracteres"}`}</Font>
                <View style={[styles.inputContainer, (found || limitReach) && { display: "none" }]}>
                    <TextInput
                        maxLength={word.length}
                        style={styles.input}
                        placeholder="O que você está pensando?"
                        value={guess}
                        onChangeText={text => setGuess(carve({ text }))}
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
