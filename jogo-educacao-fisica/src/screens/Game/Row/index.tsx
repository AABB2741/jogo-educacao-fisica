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

export default function Row({ word, guess, rowNumber }: Props) {
    const normalized = normalize(word).toLowerCase();

    function createBlocks() {
        let res = [];

        for (let i = 0; i < word.length; i++) {
            let letter = normalize(guess?.[i] ?? "").toLowerCase();
            let status: Status = "err";

            if (letter == normalized[i]) {
                status = "check";
            }

            if (normalized.includes(letter) && normalized[i] !== letter && letter) {
                status = "warn";
            }

            res.push(
                <Box
                    key={`${rowNumber}-${i}`}
                    letter={letter}
                    status={status}
                />
            );
        }

        return res;
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
