import {
    TouchableOpacity,
    View
} from "react-native";
import Font from "../Font";

import styles from "./styles";

interface OptionProps {
    icon: React.ReactNode;
    onPress?: () => void;
}

interface Props {
    title?: string;
    leftOptions?: OptionProps[];
    rightOptions?: OptionProps[];
}

export default function Header({ title, rightOptions }: Props) {
    return (
        <View style={styles.container}>
            <Font name="title" style={styles.title}>{title}</Font>
            <View style={styles.optionContainer}>
                {(rightOptions || []).map((option, i) => (
                    <TouchableOpacity key={i} style={styles.option}>
                        {option.icon}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}
