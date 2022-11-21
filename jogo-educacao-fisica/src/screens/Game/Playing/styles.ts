import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export default StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background,
        flex: 1
    },
    doneContainer: {
        padding: 20,
        backgroundColor: theme.colors.check_background,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    doneContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    done: {
        fontSize: 14,
        color: theme.colors.font,
        marginLeft: 20
    },
    questionContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 30
    },
    question: {
        paddingHorizontal: 20,
        textTransform: "uppercase",
        color: theme.colors.font,
        fontSize: 16,
        textAlign: "center"
    },
    error: {
        fontSize: 14,
        textAlign: "center",
        marginVertical: 10,
        color: theme.colors.err
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "center",
        padding: 20
    },
    input: {
        backgroundColor: theme.colors.background2,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        borderRadius: 16,
        color: theme.colors.font,
        fontSize: 16,
        fontFamily: theme.fonts.input,
        marginRight: 10
    },
    submit: {
        padding: 10,
        backgroundColor: theme.colors.background2,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12
    }
});
