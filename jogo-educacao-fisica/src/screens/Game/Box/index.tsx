import {
    View
} from "react-native";
import Font from "../../../components/Font";

import styles from "./styles";

export type Status = "check" | "warn" | "err";

interface Props {
    status: Status;
    letter: string;
}

export default function Box({ letter, status }: Props) {
    return (
        <View style={[styles.container, styles[status]]}>
            <Font name="title" style={styles.text}>{letter}</Font>
        </View>
    );
}
