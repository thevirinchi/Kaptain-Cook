import React from 'react'
import {View, Text, StyleSheet, ColorPropType} from 'react-native'

const CategoryMealsScreen = props => {
	return (
		<View style={styles.container}>
			<Text> CategoryMealsScreen</Text>
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