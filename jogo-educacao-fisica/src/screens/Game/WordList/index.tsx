import {
    FlatList
} from "react-native";
import Font from "../../../components/Font";
import LevelProp from "../../../interfaces/level";
import Word from "../Word";

import styles from "./styles";

interface Props extends LevelProp {
    level: LevelProp;
}

export default function WordList({ level }: Props) {
    return (
        <FlatList
            horizontal
            data={level.words.sort((a, b) => a.length > b.length ? -1 : 1)}
            contentContainerStyle={{ paddingLeft: 20 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <Word
                    index={index}
                    word={item}
                    totalPercent={level.words.reduce((ac, v) => ac + v.length, 0)}
                />
            )}
        />
    );
}
