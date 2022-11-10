import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export default StyleSheet.create({
    container: {
        backgroundColor: theme.colors.accent,
        padding: 20
    },
    progress: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-start"
    },
    percent: {
        fontSize: 28,
        color: theme.colors.font2
    },
    percentLabel: {
        fontSize: 16,
        marginLeft: 10,
        color: theme.colors.font2
    }
});
