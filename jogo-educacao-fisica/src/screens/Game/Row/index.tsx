import {
    View
} from "react-native";
import Font from "../../../components/Font";

import styles from "./styles";

interface Props {
    word: string;
    guess: string;
}

export default function Row({ word, guess }: Props) {
    return (
        <View style={styles.container}>
            
            {guess.split("").map(l => (
                <View style={styles.box}>
                    <Font name="title">{l}</Font>
                </View>
            ))}
        </View>
    );
}
