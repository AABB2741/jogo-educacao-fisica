import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingVertical: 10
    },
    label: {
        fontSize: 14,
        color: theme.colors.err,
        marginLeft: 20
    }
});
