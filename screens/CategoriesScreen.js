import React from 'react'
import {View, Text, Button, StyleSheet, ColorPropType} from 'react-native'

const CategoriesScreen = props => {
	return (
		<View style={styles.container}>
			<Button title="Go to Meals!" onPress={()=>{props.navigation.navigate("CategoryMeals")}}/>
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