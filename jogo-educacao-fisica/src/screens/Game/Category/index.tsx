import {
    View
} from "react-native";
import Font from "../../../components/Font";

import styles from "./styles";

interface Props {
    subtitle?: string;
    children?: React.ReactNode;
}

export default function Category({ subtitle, children }: Props) {
    return (
        <View style={styles.container}>
            <Font name="subtitle" style={styles.subtitle}>{subtitle}</Font>
            {children}
        </View>
    );
}
