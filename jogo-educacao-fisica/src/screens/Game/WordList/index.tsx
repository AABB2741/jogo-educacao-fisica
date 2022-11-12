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
}

export default function WordList({ words, data, play }: Props) {
    return (
        <FlatList
            horizontal
            data={words}
            contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <Word
                    { ...item }
                    play={play}
                    found={(data.found ?? []).includes(item.index)}
                />
            )}
        />
    );
}
