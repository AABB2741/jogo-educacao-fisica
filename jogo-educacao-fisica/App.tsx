import { useCallback } from "react";
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

import AppRoutes from "./src/routes/app.routes";
import StorageProvider from "./src/contexts/storage";
import Loading from "./src/components/Loading";

export default function App() {
	const [fontsLoaded] = useFonts({
		"FugazOne": require("./assets/fonts/FugazOne-Regular.ttf"),
		"JosefinSans": require("./assets/fonts/JosefinSans-Bold.ttf"),
		"Mulish": require("./assets/fonts/Mulish-VariableFont_wght.ttf"),
		"PTSans-Bold": require("./assets/fonts/PTSans-Bold.ttf"),
		"PTSans-Italic": require("./assets/fonts/PTSans-Italic.ttf"),
		"PTSans-Regular": require("./assets/fonts/PTSans-Regular.ttf"),
		"Ubuntu": require("./assets/fonts/Ubuntu-Bold.ttf"),
		"Ubuntu-Regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
		"Lato": require("./assets/fonts/Lato-Bold.ttf"),
		"Rubik": require("./assets/fonts/Rubik-VariableFont_wght.ttf"),
		"Exo2-Bold": require("./assets/fonts/Exo2-Bold.ttf")
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded)
			await SplashScreen.hideAsync();
	}, [fontsLoaded])

	if (!fontsLoaded)
		return <Loading />;

	return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<StatusBar barStyle="default" />
			<NavigationContainer>
				<StorageProvider>
					<AppRoutes />
				</StorageProvider>
			</NavigationContainer>
		</View>
	);
}
