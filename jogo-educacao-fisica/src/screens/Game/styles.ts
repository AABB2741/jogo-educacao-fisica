import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    question: {
        textAlign: "center",
        fontSize: 16,
        marginTop: 30,
        color: theme.colors.font
    }
});
