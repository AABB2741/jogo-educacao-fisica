import {
    View
} from "react-native";
import Font from "../../../components/Font";
import normalize from "../../../utils/normalize";
import theme from "../../../utils/theme";

import styles from "./styles";

interface Props {
    word: string;
    guess?: string;
}

interface LoadBlocksProps {
    size: number;
    word: string;
    guess?: string;
}

function loadBlocks({ size, word, guess }: LoadBlocksProps): React.ReactNode[] {
    let res = [];
    for (let i = 0; i < size; i++) {
        let backgroundColor = theme.colors.background2;

        if (guess) {
            if (normalize(guess[i].toLowerCase()) === normalize(word[i].toLowerCase())) {
                backgroundColor = theme.colors.check_background;
            } else {
                if (normalize(word.toLowerCase()).includes(normalize(guess[i].toLowerCase()))) {
                    backgroundColor = theme.colors.warn_background;
                }
            }
        }
        
        res.push(
            <View style={[styles.block, {backgroundColor, width: `${100 / size - 3}%`}]} key={i}>
                <Font name="title" style={[styles.blockText]}>{guess?.[i]}</Font>
            </View>
        );
    }
    return res;
}

export default function Row({ word, guess }: Props) {
    const size = word.length;
    
    return (
        <View style={styles.container}>
            {loadBlocks({size, word, guess})}
        </View>
    );
}
