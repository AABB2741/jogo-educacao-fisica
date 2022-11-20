import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export default StyleSheet.create({
    container: {
        padding: 20,
    },
    presentation: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between"    
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    },
    infoContainer: {
        marginLeft: 20,
        flex: 1
    },
    seasonName: {
        fontSize: 24
    },
    seasonDesc: {
        fontSize: 14
    },
    levels: {
        marginTop: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    }
});
