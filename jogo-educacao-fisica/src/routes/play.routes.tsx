import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlayParamList } from "../@types/navigation";

import Play from "../screens/Play";
import Game from "../screens/Game";

const Stack = createNativeStackNavigator<PlayParamList>();

export default function PlayRoutes() {
    return (
        <Stack.Navigator initialRouteName="PlayHome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="PlayHome" component={Play} />
            <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
    );
}
