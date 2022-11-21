import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    options: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20
    },
    hack: {
        color: theme.colors.err,
        textTransform: "uppercase",
        fontSize: 14
    },
    complete: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: 16,
        borderColor: theme.colors.err
    },
    completeText: {
        color: theme.colors.err,
        marginLeft: 10
    },
    float: {
        position: "absolute",
        right: 0,
        padding: 20
    },
    questionContainer: {
        padding: 20,
        minHeight: 250,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    question: {
        textAlign: "center",
        textTransform: "uppercase",
        color: theme.colors.font2,
        paddingHorizontal: 20,
        fontSize: 20
    },
    infos: {
        color: theme.colors.desc2,
        fontSize: 12,
        textAlign: "center"
    },
    noImage: {
        color: theme.colors.font,
        textAlign: "center"
    }
});
