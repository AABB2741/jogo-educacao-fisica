import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export default StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background2,
        padding: 10,
        borderRadius: 12,
        marginRight: 10,
        width: 100,
        height: 100,
        justifyContent: "space-between"
    },
    statusContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    lock: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    lockRequirements: {
        fontSize: 12,
        marginTop: 5,
        color: theme.colors.font
    },
    percent: {
        fontSize: 12
    },
    index: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 5,
        color: theme.colors.font
    },
    bar: {
        backgroundColor: theme.colors.accent,
        height: 10,
        borderRadius: 5
    },
    barContainer: {
        backgroundColor: theme.colors.desc2,
        borderRadius: 5,
        overflow: "hidden"
    }
});
