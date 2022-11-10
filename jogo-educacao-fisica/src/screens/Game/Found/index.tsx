import {
    View
} from "react-native";
import Font from "../../../components/Font";

import styles from "./styles";

interface Props {
    word: string;
    tries: number;
    index: number;
}

export default function Found({ word, tries, index }: Props) {
    return (
        <View style={styles.container}>
            <View>
                <Font name="title" style={styles.word}>{word}</Font>
                <Font name="desc" style={styles.tries}>{`${tries} ${tries == 1 ? "tentativa" : "tentativas"}`}</Font>
            </View>
            <View>
                <Font name="coins" style={styles.index}>{`#${index + 1}`}</Font>
            </View>
        </View>
    );
}
