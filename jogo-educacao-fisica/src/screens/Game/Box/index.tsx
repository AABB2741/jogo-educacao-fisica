import {
    View
} from "react-native";
import Font from "../../../components/Font";
import theme from "../../../utils/theme";

import styles from "./styles";

export type Status = "check" | "warn" | "err";

interface Props {
    status: Status;
    letter: string | number;
}

export default function Box({ letter, status }: Props) {
    return (
        <View style={[styles.container, styles[status]]}>
            <Font name="title" style={[styles.text, typeof letter == "number" && { color: theme.colors.desc2 }]}>{typeof letter === "number" ? letter + 1 : letter}</Font>
        </View>
    );
}
