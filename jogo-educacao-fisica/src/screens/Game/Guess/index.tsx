import { ArrowRight, X } from "phosphor-react-native";
import { useState } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    Text
} from "react-native";

import styles from "./styles";

interface Props {
    send: () => void;
}

export default function Guess({}) {
    const [guess, setGuess] = useState("");

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => setGuess("")}>
                <X size={16} />
            </TouchableOpacity>
            <TextInput style={styles.input} placeholder="Dê um palpite..." value={guess} onChangeText={text => setGuess(text)} />
            <TouchableOpacity style={styles.button}>
                <ArrowRight size={16} />
            </TouchableOpacity>
        </View>
    );
}
