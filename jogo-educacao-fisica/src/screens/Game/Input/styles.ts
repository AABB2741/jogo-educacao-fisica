import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.colors.background2,
        borderRadius: 16
    },
    input: {
        flex: 1,
        fontSize: 14,
        fontFamily: theme.fonts.input,
        fontWeight: "600",
        paddingLeft: 20,
        paddingRight: 10,
        paddingVertical: 10
    },
    button: {
        paddingRight: 20,
        paddingVertical: 10
    }
});
