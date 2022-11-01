import {
    View,
    Text,
    FlatList
} from "react-native";
import { ChartBar, Gear, Sun } from "phosphor-react-native";

import seasons from "../../utils/seasons";

import Header from "../../components/Header";
import Season from "../../components/Season";

import styles from "./styles";
import theme from "../../utils/theme";

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
                credit={{
                    icon: <Sun color={theme.colors.credits} />,
                    count: 1190
                }}
            />
            <FlatList
                contentContainerStyle={{ paddingTop: 50 }}
                data={seasons}
                renderItem={({item}) => <Season {...item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
