import React from 'react'
import {View, Text, StyleSheet, ColorPropType} from 'react-native'

const CategoriesScreen = props => {
	return (
		<View style={styles.container}>
			<Text>Categories Screen</Text>
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

export default CategoriesScreen;