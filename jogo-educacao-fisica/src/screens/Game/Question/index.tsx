import {
    View
} from "react-native";
import Font from "../../../components/Font";
import LevelProp from "../../../interfaces/level";

import styles from "./styles";

interface Props {
    question: string;
}

export default function Question({ question }: Props) {
    return (
        <View>
            <Font name="text" style={styles.try}>O que vem em sua mente?</Font>
            <Font name="seasons" style={styles.question}>{question}</Font>
        </View>
    );
}
