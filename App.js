import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

let fonts = {
	'lato-black': require('./assets/fonts/Lato-Black.ttf'),
	'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
	'lato-extra-bold': require('./assets/fonts/Lato-ExtraBold.ttf'),
	'lato-extra-light': require('./assets/fonts/Lato-ExtraLight.ttf'),
	'lato-light': require('./assets/fonts/Lato-Light.ttf'),
	'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
	'lato-semi-bold': require('./assets/fonts/Lato-SemiBold.ttf')
};

export default function App() {

	const loadFonts = async () => {
		await Font.loadAsync(fonts)
		setDataLoaded(true)
	}

	useEffect(()=>{
		loadFonts()
	}, [])

	return (
		(dataLoaded
			?
				<View style={styles.container}>
					<Text>Open up App.js to start working on your app!</Text>
					<StatusBar style="auto" />
				</View>
			:
				<AppLoading/>
		)
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
