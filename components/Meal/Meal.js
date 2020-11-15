import React, { useEffect } from 'react';
import {View, Text, Button, StyleSheet, Image, Dimensions} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import Colors from '../../constants/Colors/light'

const Meal = props => {

	return(
		<ScrollView style={styles.root}>
			<View style={styles.meal_container}>
				<Image source={{uri: props.imageUrl}} style={styles.image}></Image>
				<Text>{props.duration}</Text>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		flexDirection:"column",
	},
	meal_container: {
		width: "100%",
		flex: 1
	},
	image: {
		width: "100%",
		height: "100%",
		flex: 1,
		resizeMode: "cover",
		opacity: 1,
		justifyContent:"flex-end",
		alignItems: "center"
	}
})

export default Meal