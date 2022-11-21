import {
    FlatList
} from "react-native";
import { LevelProgress } from "../../../@types/progress";
import Font from "../../../components/Font";
import { WordProps } from "../../../interfaces/level";
import Word from "../Word";

import styles from "./styles";

interface Props {
    words: WordProps[];
    data: LevelProgress;
    play: (word: string) => void;
    handleGuess: (guess: string) => void;
}

export default function WordList({ words, data, play, handleGuess }: Props) {
    let reversed = [...words];
    reversed.sort((a, b) => a.percent <= b.percent ? -1 : 1).sort((a, b) => a.found(data.found ?? []) && !b.found(data.found ?? []) ? -1 : 0);
    reversed.reverse();

    return (
        <FlatList
            horizontal
            data={reversed}
            contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <Word
                    { ...item }
                    wasFound={item.found(data.found || [])}
                    foundCount={data.found?.length ?? 0}
                    play={play}
                    handleGuess={handleGuess}
                />
            )}
        />
    );
}
