import {
    View,
    Text
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GameController, Bag, Scroll } from "phosphor-react-native";
import { RootParamList } from "../@types/navigation";

import Shop from "../screens/Shop";
import PlayRoutes from "./play.routes";
import Quests from "../screens/Quests";

import Font from "../components/Font";
import theme from "../utils/theme";

export default () => <PlayRoutes />;

/*
const Tab = createBottomTabNavigator<RootParamList>();

export default function Navigator() {
    return (
        <Tab.Navigator initialRouteName="Play" screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                position: "absolute",
                height: 60,
                left: 30,
                bottom: 30,
                right: 30,
                backgroundColor: theme.colors.background2,
                shadowOpacity: 0,
                elevation: 0,
                borderRadius: 16,
                borderTopWidth: 0
            }
        }}>
            <Tab.Screen name="Shop" component={Shop} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center" }}>
                        <Bag size={36} color={focused ? theme.colors.accent : theme.colors.font} style={focused && { transform: [{ rotate: "15deg" }] }} weight={focused ? "fill" : "duotone"} />
                        {focused && <Font name="seasons" style={[{color: focused ? theme.colors.accent : theme.colors.font}]}>Loja</Font>}
                    </View>
                )
            }}></Tab.Screen>
            <Tab.Screen name="Play" component={PlayRoutes} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center" }}>
                        <GameController size={36} color={focused ? theme.colors.accent : theme.colors.font} style={focused && { transform: [{ rotate: "15deg" }] }} weight={focused ? "fill" : "duotone"} />
                        {focused && <Font name="seasons" style={[{color: focused ? theme.colors.accent : theme.colors.font}]}>Jogar!</Font>}
                    </View>
                )
            }} />
            <Tab.Screen name="Quests" component={Quests} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center" }}>
                        <Scroll size={36} color={focused ? theme.colors.accent : theme.colors.font} style={focused && { transform: [{ rotate: "15deg" }] }} weight={focused ? "fill" : "duotone"} />
                        {focused && <Font name="seasons" style={[{color: focused ? theme.colors.accent : theme.colors.font}]}>Missões</Font>}
                    </View>
                )
            }} />
        </Tab.Navigator>
    );
}
*/