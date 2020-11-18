import React from 'react'
import { View, Image, Text, StyleSheet, FlatList, Dimensions } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { ScrollView } from 'react-native-gesture-handler'

import RightButton from '../components/Header/RightButton'

import { Categories, MEALS } from '../data/data'

import Colors from "../constants/Colors/light"

import Primary from '../components/Typo/Heading/Primary'
import Secondary from '../components/Typo/Heading/Secondary'
import Body from '../components/Typo/Body/Body'

const MealDetailsScreen = props => {

	const displayMeal = MEALS.find(meal => meal.id === props.navigation.getParam('mealId'))

	const renderIngridientItem = (itemData) => {
		return (
			<View style={styles.gridItem}>
				<Body text={itemData.item} />
			</View>
		)
	}

	const renderStepItem = (itemData) => {
		return (
			<View style={styles.stepItem}>
				<Body text={itemData.item} />
			</View>
		)
	}

	return (
		<ScrollView>
			<Image source={{ uri: displayMeal.imageUrl }} style={styles.image}></Image>
			<View style={styles.props_container}>
				<Secondary text={displayMeal.duration + "min"} />
				<Secondary text={displayMeal.complexity} />
				<Secondary text={displayMeal.affordability} />
			</View>
			<View style={styles.ingridients_container}>
				<Primary text="Ingridients" />
				<FlatList numColumns={2} data={displayMeal.ingredients} renderItem={renderIngridientItem} backgroundColor={Colors.whiteLight} width={"100%"} />
			</View>
			<View style={styles.steps_container}>
				<Primary text="Steps" />
				<FlatList numColumns={1} data={displayMeal.steps} renderItem={renderStepItem} backgroundColor={Colors.whiteLight} width={"100%"} />
			</View>
		</ScrollView>
	)
}

MealDetailsScreen.navigationOptions = navigationData => {
	const meal = MEALS.find(meal => meal.id === navigationData.navigation.getParam('mealId'))
	if (navigationData.navigation.getParam('catId') !== "f0") {
		const cat = Categories.find(cat => cat.id === navigationData.navigation.getParam('catId'))
		return {
			headerTitle: meal.title,
			headerStyle: {
				backgroundColor: cat.bgColor
			},
			headerTintColor: cat.fgColor,
			headerRight: () => <HeaderButtons HeaderButtonComponent={RightButton}><Item title="Favorite" iconName='ios-star' onPress={() => { console.log("Press") }} /></HeaderButtons>
		}
	}
	else {
		return {
			headerTitle: meal.title,
			headerStyle: {
				backgroundColor: Colors.secondary
			},
			headerTintColor: Colors.black,
			headerRight: () => <HeaderButtons HeaderButtonComponent={RightButton}><Item title="Favorite" iconName='ios-star' onPress={() => { console.log("Press") }} /></HeaderButtons>
		}
	}
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: Dimensions.get("screen").height / 3.5
	},
	props_container: {
		width: "100%",
		paddingVertical: 16,
		paddingHorizontal: 24,
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		backgroundColor: Colors.whiteLight,
		elevation: 4
	},
	ingridients_container: {
		marginTop: 16,
		marginHorizontal: 8,
		flexDirection: "column",
		justifyContent: "center",
		paddingVertical: 24,
		paddingHorizontal: 16,
		borderRadius: 8,
		backgroundColor: Colors.whiteLight,
		elevation: 4,
		alignItems: "center"
	},
	gridItem: {
		flex: 1,
		flexDirection: "column",
		paddingVertical: 4,
		paddingHorizontal: 8,
		marginHorizontal: 8,
		marginVertical: 8,
		borderRadius: 4,
		backgroundColor: Colors.whiteLight,
		overflow: "hidden",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		borderColor: Colors.black,
		borderWidth: 0.5
	},
	steps_container: {
		marginVertical: 16,
		marginHorizontal: 8,
		flexDirection: "column",
		justifyContent: "center",
		paddingVertical: 24,
		paddingHorizontal: 16,
		borderRadius: 8,
		backgroundColor: Colors.whiteLight,
		elevation: 4,
		alignItems: "center"
	},
	stepItem: {
		flex: 1,
		flexDirection: "column",
		paddingVertical: 4,
		paddingHorizontal: 8,
		marginHorizontal: 8,
		marginVertical: 8,
		borderRadius: 4,
		backgroundColor: Colors.whiteLight,
		overflow: "hidden",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		borderColor: Colors.black,
		borderWidth: 0.5
	},
})

export default MealDetailsScreen;