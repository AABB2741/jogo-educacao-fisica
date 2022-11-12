import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export default StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 10,
        backgroundColor: theme.colors.background2,
        borderRadius: 12
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    word: {
        fontSize: 16,
        color: theme.colors.font
    },
    index: {
        fontSize: 16,
        color: theme.colors.desc
    }
});
