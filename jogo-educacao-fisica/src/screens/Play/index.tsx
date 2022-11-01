import {
    View,
    Text
} from "react-native";
import { ChartBar, Gear } from "phosphor-react-native";

import Header from "../../components/Header";

import styles from "./styles";

export default function Play() {
    return (
        <View style={styles.container}>
            <Header
                title="As estações"
                rightOptions={[{
                    icon: <ChartBar />,
                    onPress: () => null
                }, {
                    icon: <Gear />,
                    onPress: () => null
                }]}
            />
            <Text>Play!</Text>
        </View>
    );
}
