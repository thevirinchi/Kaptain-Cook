import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FavoritesScreen = props => {
	return (
		<View style={styles.container}>
			<Text>Favorites Screen</Text>
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

export default FavoritesScreen; Favorites