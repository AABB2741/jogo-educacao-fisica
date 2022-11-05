import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export default StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 16,
        backgroundColor: theme.colors.check_background,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    guess: {
        fontSize: 16
    },
    source: {
        fontSize: 12
    },
    pos: {
        color: theme.colors.check,
        fontWeight: "bold",
        fontSize: 14
    }
});
