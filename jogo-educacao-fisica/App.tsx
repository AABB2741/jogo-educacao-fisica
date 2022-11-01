import { useCallback } from "react";
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

import AppRoutes from "./src/routes/app.routes";

export default function App() {
	const [fontsLoaded] = useFonts({
		"FugazOne": require("./assets/fonts/FugazOne-Regular.ttf"),
		"JosefinSans": require("./assets/fonts/JosefinSans-Bold.ttf"),
		"Mulish": require("./assets/fonts/Mulish-VariableFont_wght.ttf"),
		"PTSans-Bold": require("./assets/fonts/PTSans-Bold.ttf"),
		"PTSans-Italic": require("./assets/fonts/PTSans-Italic.ttf"),
		"PTSans-Regular": require("./assets/fonts/PTSans-Regular.ttf"),
		"Ubuntu": require("./assets/fonts/Ubuntu-Bold.ttf")
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded)
			await SplashScreen.hideAsync();
	}, [fontsLoaded])

	if (!fontsLoaded)
		return null;

	return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<StatusBar barStyle="default" />
			<NavigationContainer>
				<AppRoutes />
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
