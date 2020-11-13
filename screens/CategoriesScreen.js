import React from 'react'
import { View, Text, FlatList, StyleSheet, Platform, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import CategoryItem from '../components/Grid/CategoryItem'

import Colors from '../constants/Colors/light'

import { Categories } from "../data/data"

const CategoriesScreen = props => {

	const onCategoryPress = (id) => {
		props.navigation.navigate({
			routeName: 'CategoryMeals',
			params: {
				categoryId: id
			}
		})
	}

	const renderGridItem = (itemData) => {
		return (
			<CategoryItem
				onPressHandler={onCategoryPress}
				id={itemData.item.id}
				backgroundColor={itemData.item.bgColor}
				color={itemData.item.fgColor}
				title={itemData.item.title}
			/>
		)
	}

	return (
		<View style={styles.container}>
			<FlatList numColumns={2} data={Categories} renderItem={renderGridItem} backgroundColor={Colors.whiteLight} width={"100%"} />
		</View>
	)
}

CategoriesScreen.navigationOptions = {
	headerTitle: 'Meal Categories',
	headerStyle: {
		backgroundColor: Colors.primary
	},
	headerTintColor: Colors.whiteLight
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.whiteLight,
		justifyContent: "center",
		alignItems: "center"
	},
	gridItem: {
		flex: 1,
		margin: 16,
		height: Dimensions.get("window").width / 3,
		width: (Dimensions.get("window").width - 60) / 2,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 16,
		elevation: 6,
	},
	categories_text: {
		fontFamily: 'lato-bold',
		fontSize: 16,
		textTransform: "uppercase"
	}
})

export default CategoriesScreen;