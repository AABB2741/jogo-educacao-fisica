import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export default StyleSheet.create({
    content: {
        backgroundColor: theme.colors.background,
        padding: 20
    },
    guess: {
        marginTop: 20,
        backgroundColor: theme.colors.background2,
        padding: 10,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        fontFamily: theme.fonts.input,
        borderBottomColor: theme.colors.accent,
        borderBottomWidth: 3
    }
});
