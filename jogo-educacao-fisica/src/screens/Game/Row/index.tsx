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
                console.log(`Removendo ${letter} do índice ${foundIndex}`)
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

        // for (let i = 0; i < word.length; i++) {
        //     console.log(`Sobrantes:`);
        //     console.log(remaining);
        //     let letter = normalize(guess?.[i] ?? "").toLowerCase();
        //     console.log(`Letra: ${letter} -> ${i}`);
        
        //     let remainingIndex = remaining.findIndex(r => r.pos == i);
        //     let remainingLetter = remaining[remainingIndex];
        //     console.log(`Index encontrado: ${remainingIndex}`);
        //     if (remainingLetter?.pos == i && remainingLetter.letter == letter) {
        //         remaining.splice(remainingIndex, 1);
        //         guessRemaining.splice(i, 1);
        //         console.log(`Removendo ${letter} -> ${remainingIndex}`);
        //         res.push({
        //             letter,
        //             status: "check",
        //             pos: i
        //         });
        //     }
        // }

        console.log("\n\n\nLetras sobrando:");
        // for (let letter of guessRemaining) {
        //     if (remaining.filter(r => r.letter == letter.letter).length) {
        //         letter.status = "warn";
        //     }

        //     console.log(letter);
        //     res.push({ ...letter });
        // }

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
