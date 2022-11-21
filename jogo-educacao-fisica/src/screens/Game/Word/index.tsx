import { useState } from "react";
import {
    TouchableOpacity,
    Pressable,
    View
} from "react-native";

import styles from "./styles";

import Font from "../../../components/Font";
import { Check, CheckCircle, Circle, Keyhole, LockKeyOpen, LockSimple } from "phosphor-react-native";
import theme from "../../../utils/theme";
import { WordProps } from "../../../interfaces/level";
import { useStorage } from "../../../contexts/storage";
import Popup from "../../../components/Popup";

interface Props extends WordProps {
    wasFound: boolean;
    foundCount: number;
    play: (word: string) => void;
    handleGuess: (guess: string) => void;
}

export default function Word({ word, index, percent, foundCount, wasFound, unlock, play, handleGuess }: Props) {
    const { storage } = useStorage();
    const [reveal, setReveal] = useState(false);
    const [showLockHint, setShowLockHint] = useState(false);
    let unlocked = foundCount >= (unlock ?? 0);

    if (!unlocked) {
        return (
            <Pressable onPress={() => setShowLockHint(true)} onLongPress={() => setReveal(true)} style={styles.container}>
                {storage.enableHack && (
                    <Popup
                        title={`Palavra #${index} ∙ ${percent.toFixed(2).replace(".", ",")}% ∙ (bloqueada)`}
                        desc={word}
                        visible={reveal}
                        onRequestClose={() => setReveal(false)}
                    >
                        <TouchableOpacity style={styles.complete} onPress={() => {
                            play(word);
                            setReveal(false);
                        }}>
                            <Font name="button" style={styles.completeText}>Desbloquear</Font>
                        </TouchableOpacity>
                    </Popup>
                )}
                <Popup
                    title="Palavra bloqueada"
                    desc={`Para jogar este jogo de letras, é necessário que você encontre ${unlock} ${unlock == 1 ? "palavra" : "palavras"} antes!`}
                    visible={showLockHint}
                    onRequestClose={() => setShowLockHint(false)}
                />
                <View style={styles.lock}>
                    { wasFound ? <Keyhole size={28} color={theme.colors.accent} weight="fill" /> : <Keyhole size={28} color={theme.colors.font} /> }
                    <Font name="title" style={styles.lockRequirements}>{`${foundCount}/${unlock ?? 0}`}</Font>
                </View>
                <View style={styles.barContainer}>
                    <View style={[styles.bar, { width: `${percent}%` }]}></View>
                </View>
            </Pressable>
        );
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => play(word)} onLongPress={() => setReveal(true)}>
            {storage.enableHack && (
                <Popup
                    title={`Palavra #${index} ∙ ${percent.toFixed(2).replace(".", ",")}%`}
                    desc={word}
                    visible={reveal}
                    onRequestClose={() => setReveal(false)}
                >
                    <TouchableOpacity style={styles.complete} onPress={() => {
                        handleGuess(word);
                        setReveal(false);
                    }}>
                        <Font name="button" style={styles.completeText}>Desbloquear</Font>
                    </TouchableOpacity>
                </Popup>
            )}
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
