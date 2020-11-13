import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const MealDetailsScreen = props => {
	return (
		<View style={styles.container}>
			<Button title="Go back" onPress={()=>{props.navigation.popToTop()}}/>
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