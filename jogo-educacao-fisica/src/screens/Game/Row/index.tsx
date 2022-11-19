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
    const normalizedGuess = normalize(guess || "").toLowerCase();

    function createBlocks() {
        let res: RowProp[] = [];

        let letters = word.split("").map((l, pos) => ({ letter: normalize(l).toLowerCase(), pos}));
        for (let i = 0; i < word.length; i++) {
            let letter = normalize(guess?.[i] ?? "").toLowerCase();
            let status: Status = "err";
        
            for (let l in letters) {
                let j = Number(l);
                let k = letters[j];
                if (k.pos == i && k.letter == letter) {
                    letters.splice(j, 1);
                    status = "check";
                    break;
                }
            }
            
            if (status == "check") {
                res.push({
                    letter,
                    status,
                    pos: i
                });
            }
        }

        // for (let letter of letters) {
        //     let status: Status = "err";
        //     if (normalizedGuess.includes(letter.letter)) {
        //         console.log(`${normalizedGuess} inclui ${letter.letter}!`);
        //         if (normalizedGuess[letter.pos] != letter.letter) {
        //             console.log(`${normalizedGuess} não inclui ${letter.letter} na posição ${letter.pos}!`);
        //             status = "warn";
        //         }
        //     }
        //     console.log(`Pushando ${letter.letter} -> ${status}`)

        //     res.push({
        //         letter: normalizedGuess[letter.pos],
        //         status,
        //         pos: letter.pos
        //     });
        // }

        // for (let i = 0; i < word.length; i++) {
        //     let letter = normalize(guess?.[i] ?? "").toLowerCase();
        //     let status: Status = "err";

            

        //     res.push({
        //         letter,
        //         status,
        //         pos: i
        //     });
        // }

        return res.sort((a, b) => a.pos > b.pos ? 1 : -1).map(r => (
            <Box
                key={`${rowNumber}-${r.pos}`}
                letter={r.letter}
                status={r.status}
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
