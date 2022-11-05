import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export default StyleSheet.create({
    container: {
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "48%",
        backgroundColor: theme.colors.background2
    },
    text: {
        fontSize: 14,
        color: theme.colors.desc
    }
});
