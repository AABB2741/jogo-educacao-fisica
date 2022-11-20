import {
    TouchableOpacity,
    View
} from "react-native";

import styles from "./styles";

import Font from "../../../components/Font";
import { Check, CheckCircle, Circle, Keyhole, LockKeyOpen, LockSimple } from "phosphor-react-native";
import theme from "../../../utils/theme";
import { WordProps } from "../../../interfaces/level";

interface Props extends WordProps {
    wasFound: boolean;
    foundCount: number;
    play: (word: string) => void;
}

export default function Word({ word, index, percent, foundCount, wasFound, unlock, play }: Props) {
    let unlocked = foundCount >= (unlock ?? 0);

    if (!unlocked) {
        return (
            <View style={styles.container}>
                <View style={styles.lock}>
                    { wasFound ? <Keyhole size={28} color={theme.colors.accent} weight="fill" /> : <Keyhole size={28} color={theme.colors.font} /> }
                    <Font name="title" style={styles.lockRequirements}>{`${foundCount}/${unlock ?? 0}`}</Font>
                </View>
                <View style={styles.barContainer}>
                    <View style={[styles.bar, { width: `${percent}%` }]}></View>
                </View>
            </View>
        );
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => play(word)}>
            <View style={styles.statusContainer}>
                <Font name="coins" style={[styles.percent, { color: wasFound ? theme.colors.accent : theme.colors.font }]}>{`${percent.toFixed(0)}%`}</Font>
                { wasFound ? (
                    <CheckCircle weight="fill" size={12} color={theme.colors.accent} style={{ transform: [{ translateY: 1 }] }} />
                ) : (
                    <Circle weight="bold" size={12} color={theme.colors.font} style={{ transform: [{ translateY: 1 }] }} />
                ) }
                {/* <Circle weight="thin" size={12} color={theme.colors.font} style={{ transform: [{ translateY: 1 }] }} /> */}
            </View>
            <Font name="title" style={styles.index}>{`#${index}`}</Font>
            <View style={styles.barContainer}>
                <View style={[styles.bar, { width: `${percent}%` }]}></View>
            </View>
        </TouchableOpacity>
    );
}
