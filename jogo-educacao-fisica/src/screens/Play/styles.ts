import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export default StyleSheet.create({
    container: {
        backgroundColor: "#FFE194",
        flex: 1
    },
    deleteButton: {
        marginTop: 20,
        backgroundColor: theme.colors.err,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 50,
        alignItems: "center"
    },
    delete: {
        color: theme.colors.font2,
        fontSize: 16
    }
});
