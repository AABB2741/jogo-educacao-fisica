import {
    View
} from "react-native";
import Font from "../../../components/Font";
import normalize from "../../../utils/normalize";
import Box, { Status } from "../Box";

import styles from "./styles";

interface Props {
    word: string;
    guess: string | undefined;
    rowNumber: number;
}

interface RowProp {
    letter: string;
    status: Status;
    pos: number;
}

export default function Row({ word, guess, rowNumber }: Props) {
    const normalizedWord = normalize(word || "").toLowerCase();
    const normalizedGuess = normalize(guess || "").toLowerCase();

    function createBlocks() {
        if (!guess) {
            let emptyBlocks = [];
            for (let i = 0; i < word.length; i++) {
                emptyBlocks.push(
                    <Box
                        letter={i}
                        status="err"
                        key={`${rowNumber}-${i}`}
                    />
                );
            }
            return emptyBlocks;
        }

        let res: RowProp[] = [];

        let remaining: RowProp[] = normalizedWord.split("").map((l, pos) => ({ letter: l, pos, status: "err"}));
        let guessRemaining: RowProp[] = normalizedGuess.split("").map((l, pos) => ({ letter: l, pos, status: "err" }));
        for (let i = 0; i < word.length; i++) {
            let letter = normalize(guess?.[i] ?? "").toLowerCase();

            if (normalizedWord[i] == letter) {
                res.push({
                    letter,
                    pos: i,
                    status: "check"
                });
                let foundIndex = remaining.findIndex(r => r.pos == i);
                remaining.splice(foundIndex, 1);
                let guessIndex = guessRemaining.findIndex(g => g.pos == i);
                guessRemaining.splice(guessIndex, 1);
            }
        }

        for (let letter of guessRemaining) {
            let remainingIndex = remaining.findIndex(r => r.letter == letter.letter);
            if (remainingIndex != -1) {
                res.push({
                    ...letter,
                    status: "warn"
                });
            } else {
                res.push({
                    ...letter,
                    status: "err"
                })
            }

            remaining.splice(remainingIndex, 1);
        }

        return res.sort((a, b) => a.pos > b.pos ? 1 : -1).map(r => (
            <Box
                { ...r }
                key={`${rowNumber}-${r.pos}`}
            />
        ));
    }

    return (
        <View style={styles.container}>
            {createBlocks()}
            {/* {guess.split("").map((l, i) => {
                let s: status = normalize(l).toLowerCase() == normalize(word[i]).toLowerCase() ? "correct" : "incorrect";
                return (
                    <View style={[styles.box, styles[s]]}>
                        <Font name="title">{l}</Font>
                    </View>
                )})} */}
        </View>
    );
}
