import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MealsNavigator from "./navigation/MealsNavigation"

let fonts = {
	'lato-black': require('./assets/Fonts/Lato-Black.ttf'),
	'lato-bold': require('./assets/Fonts/Lato-Bold.ttf'),
	'lato-light': require('./assets/Fonts/Lato-Light.ttf'),
	'lato-regular': require('./assets/Fonts/Lato-Regular.ttf'),
	'lato-semi-bold': require('./assets/Fonts/Lato-Thin.ttf')
};

export default function App() {

	const [dataLoaded, setDataLoaded] = useState(false)

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
				<MealsNavigator/>
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
