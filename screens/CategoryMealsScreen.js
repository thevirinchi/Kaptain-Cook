import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

import { Categories } from '../data/data'

const CategoryMealsScreen = props => {

	return (
		<View style={styles.container}>
			<Button title="Go to Meal!" onPress={() => { props.navigation.push("MealDetails") }} />
			<Button title="Go back" onPress={() => { props.navigation.goBack() }} />
		</View>
	)
}

CategoryMealsScreen.navigationOptions = navigationData => {
	const cat = Categories.find(cat => cat.id === navigationData.navigation.getParam('categoryId'))
	return {
		headerTitle: cat.title,
		headerStyle: {
			backgroundColor: cat.bgColor
		},
		headerTintColor: cat.fgColor
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

export default CategoryMealsScreen;