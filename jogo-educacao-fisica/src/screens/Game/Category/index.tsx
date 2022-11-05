import {
    View,
    TouchableOpacity,
    StyleSheetProperties,
    ViewStyle
} from "react-native";
import Font from "../../../components/Font";
import { Question } from "phosphor-react-native";

import styles from "./styles";

interface Props {
    subtitle: string;
    displayHelp?: boolean;
    children?: React.ReactNode;
    contentContainerStyle?: ViewStyle
}

export default function Category({ subtitle, displayHelp, children, contentContainerStyle }: Props) {
    return (
        <View>
            <View style={styles.subtitleContainer}>
                <Font name="title" style={styles.subtitle}>{subtitle}</Font>
                <TouchableOpacity style={{ transform: [{ translateY: 5 }], display: displayHelp ? "flex" : "none" }} >
                    <Question size={18} />
                </TouchableOpacity>
            </View>
            <View style={contentContainerStyle}>
                {children}
            </View>
        </View>
    );
}
