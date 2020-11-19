import React, { useState, useEffect, useCallback } from 'react'
import { View, StyleSheet, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import RightButton from '../components/Header/RightButton'
import Secondary from '../components/Typo/Heading/Secondary'
import FilterItem from '../components/Filter/FilterItem'

import Colors from "../constants/Colors/light"
import { useDispatch } from 'react-redux'
import { setFilters } from '../state/meals/actions'

const FiltersScreen = props => {

	const { navigation } = props

	const [isGlutenFree, toggleGlutenFree] = useState(false)
	const [isLactosFree, toggleLactosFree] = useState(false)
	const [isVegan, toggleVegan] = useState(false)
	const [isVegetarian, toggleVegetarian] = useState(false)

	const dispatch = useDispatch()

	const saveFilters = useCallback(() => {
		const appliedFilters = {
			glutenFree: isGlutenFree,
			lactosFree: isLactosFree,
			vegan: isVegan,
			vegetarian: isVegetarian
		}
		dispatch(setFilters(appliedFilters))
	}, [isGlutenFree, isLactosFree, isVegan, isVegetarian])

	useEffect(() => {
		navigation.setParams({ save: saveFilters })
	}, [saveFilters])

	return (
		<View style={styles.container}>
			<Secondary text="Available Filters" />
			<View style={{ flexDirection: "column", marginTop: 16, flex: 1, width: "100%" }}>
				<FilterItem text="Gluten Free" state={isGlutenFree} onChange={(newValue) => { toggleGlutenFree(newValue) }} />
				<FilterItem text="Lactos Free" state={isLactosFree} onChange={(newValue) => { toggleLactosFree(newValue) }} />
				<FilterItem text="Vegan" state={isVegan} onChange={(newValue) => { toggleVegan(newValue) }} />
				<FilterItem text="Vegetarian" state={isVegetarian} onChange={(newValue) => { toggleVegetarian(newValue) }} />
			</View>
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
		headerLeft: () => <HeaderButtons HeaderButtonComponent={RightButton}><Item title="Menu" iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }} /></HeaderButtons>,
		headerRight: () => <HeaderButtons HeaderButtonComponent={RightButton}><Item title="Save" iconName='ios-save' onPress={navData.navigation.getParam('save')} /></HeaderButtons>,
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.whiteLight,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 16,
		paddingHorizontal: 24
	}
})

export default FiltersScreen;