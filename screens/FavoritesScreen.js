import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import MealItem from '../components/Grid/MealItem'

import { useSelector } from 'react-redux'

import Colors from "../constants/Colors/light"

const FavoritesScreen = props => {

	const favMeals = useSelector(state => state.meals.favoriteMeals)

	const onMealPress = (id) => {
		props.navigation.navigate({
			routeName: 'MealDetails',
			params: {
				mealId: id,
				catId: "f0",
				mealTitle: favMeals.filter(meal => meal.id === id)[0].title
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

	const displayMeals = favMeals.filter(
		meal => meal.categoryIds.indexOf(props.navigation.getParam('categoryId')) >= 0
	)

	return (
		<View style={styles.container}>
			<FlatList numColumns={1} data={favMeals} renderItem={renderGridItem} backgroundColor={Colors.whiteLight} width={"100%"} />
		</View>
	)
}

FavoritesScreen.navigationOptions = {
	headerTitle: 'My Favorites',
	headerStyle: {
		backgroundColor: Colors.primary
	},
	headerTintColor: Colors.whiteLight
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

export default FavoritesScreen;