import {
    View
} from "react-native";
import Font from "../../../components/Font";

import styles from "./styles";

interface Props {
    subtitle?: string;
    children?: React.ReactNode;
    noPadding?: boolean;
    reverse?: boolean;
}

export default function Category({ subtitle, reverse, children, noPadding }: Props) {
    return (
        <View style={[styles.container, noPadding && { padding: 0 }]}>
            <Font name="title" style={[styles.subtitle, noPadding && { paddingHorizontal: 20 }]}>{subtitle}</Font>
            <View style={[reverse && { flexDirection: "column-reverse" }]}>
                {children}
            </View>
        </View>
    );
}
