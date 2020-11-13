import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const CategoryItem = props => {
	return (
		<TouchableOpacity
			onPress={props.onPressHandler.bind(this, props.id)}
			style={{ ...styles.gridItem, backgroundColor: props.backgroundColor }}>
			<View>
				<Text style={{ ...styles.categories_text, color: props.color }}>{props.title}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
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

export default CategoryItem;