import {
    View
} from "react-native";

import styles from "./styles";

import Font from "../../../components/Font";

interface Props {
    word: string;
    source: string;
    pos: number;
}

export default function Guess({word, source, pos}: Props) {
    return (
        <View style={styles.container}>
            <View>
                <Font name="title" style={styles.guess}>{word}</Font>
                <Font name="desc" style={styles.source}>{source}</Font>
            </View>
            <Font name="text" style={styles.pos}>{`#${pos}`}</Font>
        </View>
    );
}
