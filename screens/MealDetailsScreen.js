import React from 'react'
import {View, Text, StyleSheet, ColorPropType} from 'react-native'

const MealDetailsScreen = props => {
	return (
		<View style={styles.container}>
			<Text> MealDetailsScreen</Text>
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

export default MealDetailsScreen;