import {
    View
} from "react-native";
import Font from "../../../components/Font";
import normalize from "../../../utils/normalize";

import styles from "./styles";

interface Props {
    word: string;
    guess: string | undefined;
}

type status = "correct" | "incorrect" | "misplaced";

export default function Row({ word, guess }: Props) {
    function createBlocks() {
        let res = [];

        for (let i = 0; i < word.length; i++) {
            res.push(
                <View style={[styles.box, styles.incorrect]}>
                    <Font name="title">{guess?.[i] ?? ""}</Font>
                </View>
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
