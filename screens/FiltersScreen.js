import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import RightButton from '../components/Header/RightButton'

import { Categories, MEALS } from '../data/data'

import Colors from "../constants/Colors/light"

const FiltersScreen = props => {
	return (
		<View style={styles.container}>
			<Text>Filters Screen</Text>
		</View>
	)
}

FiltersScreen.navigationOptions = navData => {
	return {
		headerTitle: 'Filter Recipes',
		headerStyle: {
			backgroundColor: Colors.primary
		},
		headerTintColor: Colors.whiteLight,
		headerLeft: ()=> <HeaderButtons HeaderButtonComponent={RightButton}><Item title="Menu" iconName='ios-menu' onPress={()=>{navData.navigation.toggleDrawer()}}/></HeaderButtons>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	}
})

export default FiltersScreen;