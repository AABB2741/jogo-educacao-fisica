import {
    View
} from "react-native";

import styles from "./styles";

interface Props {
    word: string;
    guess: string;
}

export default function Row({ word, guess }: Props) {
    return (
        <View style={styles.container}>
            
        </View>
    );
}
