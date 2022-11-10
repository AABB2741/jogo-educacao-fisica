import {
    TouchableOpacity,
    View
} from "react-native";

import styles from "./styles";

import Font from "../../../components/Font";
import { CheckCircle, Circle } from "phosphor-react-native";
import theme from "../../../utils/theme";

interface Props {
    word: string;
    index: number;
    totalPercent: number;
    play: (word: string) => void;
}

export default function Word({ word, index, totalPercent, play }: Props) {
    let percent = word.length / totalPercent * 100;

    return (
        <TouchableOpacity style={styles.container} onPress={() => play(word)}>
            <View style={styles.statusContainer}>
                <Font name="coins" style={styles.percent}>{`${percent.toFixed(0)}%`}</Font>
                <CheckCircle weight="fill" size={12} color={theme.colors.accent} style={{ transform: [{ translateY: 1 }] }} />
                {/* <Circle weight="thin" size={12} color={theme.colors.font} style={{ transform: [{ translateY: 1 }] }} /> */}
            </View>
            <Font name="title" style={styles.index}>{`#${index + 1}`}</Font>
            <View style={styles.barContainer}>
                <View style={[styles.bar, { width: `${percent}%` }]}></View>
            </View>
        </TouchableOpacity>
    );
}
