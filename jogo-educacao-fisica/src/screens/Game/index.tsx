import {
    View,
    ScrollView,
    TouchableOpacity
} from "react-native";
import Header from "../../components/Header";
import { CaretLeft } from "phosphor-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PlayParamList } from "../../@types/navigation";
import { RouteProp } from "@react-navigation/native";

import styles from "./styles";
import levels from "../../utils/levels";

interface GameProps {
    navigation: NativeStackNavigationProp<PlayParamList, "Game">;
    route: RouteProp<{ params: {id: number, season: "summer" | "falls" | "winter" | "spring"} }>
}

export default function Game({ navigation, route }: GameProps) {
    const level = levels.find(l => l.id == route.params.id);
    return (
        <View style={styles.container}>
            <Header title={`#${(level?.id ?? 0) + 1}. ${level?.question}`} hideFloat leftOptions={[{
                icon: (
                    <TouchableOpacity onPress={navigation.goBack}>
                        <CaretLeft/>
                    </TouchableOpacity>
                )
            }]} />
            <ScrollView>
                <View style={styles.statusContainer}></View>
            </ScrollView>
        </View>
    );
}
