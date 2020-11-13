import React from 'react'
import { View, Text, FlatList, StyleSheet, Platform, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Colors from '../constants/Colors/light'

import { Categories } from "../data/data"

const CategoriesScreen = props => {

	const renderGridItem = (itemData) => {
		return (
			<TouchableOpacity
				onPress={() => props.navigation.navigate({
					routeName: 'CategoryMeals',
					params: {
						categoryId: itemData.item.id
					}
				})}
				style={{ ...styles.gridItem, backgroundColor: itemData.item.bgColor }}>
				<View>
					<Text style={{ ...styles.categories_text, color: itemData.item.fgColor }}>{itemData.item.title}</Text>
				</View>
			</TouchableOpacity>
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