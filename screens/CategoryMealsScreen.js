import React from 'react'
import {View, Text, Button, StyleSheet, ColorPropType} from 'react-native'

const CategoryMealsScreen = props => {
	return (
		<View style={styles.container}>
			<Button title="Go to Meal!" onPress={()=>{props.navigation.push("MealDetails")}}/>
			<Button title="Go back" onPress={()=>{props.navigation.goBack()}}/>
		</View>
	)
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