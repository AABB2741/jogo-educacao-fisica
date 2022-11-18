import {
    View
} from "react-native";
import Font from "../../../components/Font";
import normalize from "../../../utils/normalize";
import Box from "../Box";

import styles from "./styles";

interface Props {
    word: string;
    guess: string | undefined;
    rowNumber: number;
}

type status = "correct" | "incorrect" | "misplaced";

export default function Row({ word, guess, rowNumber }: Props) {
    const normalized = normalize(word).toLowerCase();
    console.log(normalized);

    function createBlocks() {
        let res = [];

        for (let i = 0; i < word.length; i++) {
            let letter = guess?.[i] ?? "";
            res.push(
                <Box
                    key={`${rowNumber}-${i}`}
                    letter={letter}
                    status="err"
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
