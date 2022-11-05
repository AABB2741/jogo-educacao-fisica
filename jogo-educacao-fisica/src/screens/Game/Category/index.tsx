import {
    View,
    TouchableOpacity
} from "react-native";
import Font from "../../../components/Font";
import { Question } from "phosphor-react-native";

import styles from "./styles";

interface Props {
    subtitle: string;
    children?: React.ReactNode;
}

export default function Category({ subtitle, children }: Props) {
    return (
        <View>
            <View style={styles.subtitleContainer}>
                <Font name="title" style={styles.subtitle}>{subtitle}</Font>
                <TouchableOpacity>
                    <Question size={18} />
                </TouchableOpacity>
            </View>
            {children}
        </View>
    );
}
