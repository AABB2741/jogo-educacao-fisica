import {
    Text,
    TextProps,
    View
} from "react-native";

import styles from "./styles";
import theme from "../../utils/theme";

interface Props extends TextProps {
    children?: string | number | undefined;
    name: "seasons" | "title" | "desc" | "coins" | "subtitle" | "obs";
}

export default function Font({ children, name, ...rest }: Props) {
    return (
        <View style={styles.container}>
            <Text {...rest} style={[rest.style, { fontFamily: theme.fonts[name] }]}>{children}</Text>
        </View>
    );
}
