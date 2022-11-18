import {
    View
} from "react-native";
import Font from "../../../components/Font";

import styles from "./styles";

interface Props {
    status: "check" | "warn" | "err";
    letter: string;
}

export default function Box({ letter, status }: Props) {
    console.log(`Letra: ${letter}`);
    return (
        <View style={[styles.container, styles[status]]}>
            <Font name="title" style={styles.text}>{letter}</Font>
        </View>
    );
}
