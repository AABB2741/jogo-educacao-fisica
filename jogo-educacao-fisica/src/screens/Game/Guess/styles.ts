import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-between"
    },
    input: {
        marginHorizontal: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.background2,
        borderRadius: 12,
        flex: 1,
        fontFamily: theme.fonts.input,
        fontSize: 14
    },
    button: {
        aspectRatio: 1,
        padding: 5,
        borderRadius: 12,
        backgroundColor: theme.colors.background2,
        justifyContent: "center",
        alignItems: "center"
    }
});
