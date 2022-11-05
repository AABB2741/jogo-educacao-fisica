import { Check } from "phosphor-react-native";
import {
    TouchableOpacity
} from "react-native";
import Font from "../../../components/Font";
import theme from "../../../utils/theme";

import styles from "./styles";

interface Props {
    index: number;
    done?: boolean;
    text: string;
}

export default function Word({ index, text, done }: Props) {
    return (
        <TouchableOpacity style={[styles.container, done && {backgroundColor: theme.colors.check_background}]}>
            <Font name="title" style={[styles.text, done && {color: theme.colors.font}]}>{done ? text : `Palavra ${index}`}</Font>
            {done && <Check color={theme.colors.check} size={14} weight="bold" /> }
        </TouchableOpacity>
    );
}
