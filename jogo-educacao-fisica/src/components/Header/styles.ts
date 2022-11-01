import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export default StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: theme.colors.background2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 16
    },
    optionContainer: {
        flexDirection: "row"
    },
    option: {
        paddingLeft: 15
    }
});
