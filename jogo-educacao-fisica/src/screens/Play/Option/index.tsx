import {
    TouchableOpacity
} from "react-native";
import Font from "../../../components/Font";

import styles from "./styles";

interface Props {
    icon?: React.ReactNode;
    label?: string;
    onPress?: () => void;
}

export default function Option({ icon, label, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            { icon }
            <Font name="button" style={styles.label}>{label}</Font>
        </TouchableOpacity>
    );
}
