import { ArrowRight, X } from "phosphor-react-native";
import { useState } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    Text
} from "react-native";
import theme from "../../../utils/theme";

import styles from "./styles";

interface Props {
    send: (guess: string) => void;
}

export default function Guess({ send }: Props) {
    const [guess, setGuess] = useState("");

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => setGuess("")}>
                <X size={16} />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Dê um palpite..."
                value={guess}
                onChangeText={text => setGuess(text)}
                onSubmitEditing={() => {
                    send(guess);
                    setGuess("");
                }}
            />
            <TouchableOpacity style={[styles.button]} onPress={() => {
                send(guess);
                setGuess("");
            }}>
                <ArrowRight size={16} color={theme.colors.accent} weight="bold" />
            </TouchableOpacity>
        </View>
    );
}
