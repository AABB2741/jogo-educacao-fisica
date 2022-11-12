import {
    View
} from "react-native";
import Font from "../../../components/Font";
import theme from "../../../utils/theme";

import styles from "./styles";

interface Props {
    word: string;
    index: number;
    check?: boolean;
}

export default function Found({ word, index, check }: Props) {
    return (
        <View style={[styles.container, check && { backgroundColor: theme.colors.check_background }]}>
            <View style={styles.content}>
                <Font name="title" style={styles.word}>{word}</Font>
                <Font name="coins" style={[styles.index, check && { color: theme.colors.check }]}>{`#${index + 1}`}</Font>
            </View>
        </View>
    );
}
