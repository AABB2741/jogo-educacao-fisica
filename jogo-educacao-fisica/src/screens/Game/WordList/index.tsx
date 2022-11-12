import {
    FlatList
} from "react-native";
import Font from "../../../components/Font";
import LevelProp, { WordProps } from "../../../interfaces/level";
import Word from "../Word";

import styles from "./styles";

interface Props {
    words: WordProps[];
    play: (word: string) => void;
}

export default function WordList({ words, play }: Props) {
    return (
        <FlatList
            horizontal
            data={words}
            contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <Word
                    { ...item }
                    play={play}
                    totalPercent={words.reduce((ac, v) => ac + v.word.length, 0)}
                />
            )}
        />
    );
}
