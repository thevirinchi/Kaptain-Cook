import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import MealItem from '../components/Grid/MealItem'

import { Categories, MEALS } from '../data/data'

import Colors from "../constants/Colors/light"

const CategoryMealsScreen = props => {
	
	const onMealPress = (id) => {
		props.navigation.navigate({
			routeName: 'MealDetails',
			params: {
				mealId: id,
				catId: props.navigation.getParam('categoryId')
			}
		})
	}

	const renderGridItem = (itemData) => {
		return (
			<MealItem
				onPressHandler={onMealPress}
				id={itemData.item.id}
				title={itemData.item.title}
				imageUrl={itemData.item.imageUrl}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
			/>
		)
	}

	const displayMeals = MEALS.filter(
		meal => meal.categoryIds.indexOf(props.navigation.getParam('categoryId'))>=0
	)

	return (
		<View style={styles.container}>
			<FlatList numColumns={1} data={displayMeals} renderItem={renderGridItem} backgroundColor={Colors.whiteLight} width={"100%"} />
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
		backgroundColor: Colors.white,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	}
})

export default CategoryMealsScreen;