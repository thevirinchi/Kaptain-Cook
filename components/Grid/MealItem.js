import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

import Colors from '../../constants/Colors/light'

import Secondary from '../Typo/Heading/Secondary'
import Tertiary from '../Typo/Heading/Tertiary'

const MealItem = props => {

	return (
		<TouchableOpacity
			onPress={props.onPressHandler.bind(this, props.id)}
			style={{ ...styles.gridItem }}>
			<View style={{width: "100%", height: "88%"}}>
				<ImageBackground source={{uri: props.imageUrl}} style={styles.image}>
					<View style={styles.title_container}>
						<Secondary text={props.title}/>
					</View>
				</ImageBackground>
			</View>
			<View style={{width: "100%", height: "12%"}}>
				<View style={styles.details_container}>
					<Tertiary text={props.complexity}/>
					<Tertiary text={props.affordability}/>
					<Tertiary text={props.duration + "min"}/>
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		flexDirection: "column",
		marginHorizontal: 40,
		marginVertical: 16,
		height: Dimensions.get("window").width / 1.75,
		width: (Dimensions.get("window").width - 80),
		borderRadius: 16,
		elevation: 6,
		backgroundColor: Colors.whiteLight,
		overflow: "hidden"
	},
	categories_text: {
		fontFamily: 'lato-bold',
		fontSize: 16,
		textTransform: "capitalize"
	},
	props_text: {
		fontFamily: 'lato-regular',
		fontSize: 16,
		textTransform: "capitalize"
	},
	image: {
		width: "100%",
		height: "100%",
		flex: 1,
		resizeMode: "cover",
		opacity: 1,
		justifyContent:"flex-end",
		alignItems: "center"
	},
	title_container: {
		width: "100%",
		backgroundColor: Colors.whiteSemi,
		paddingVertical: 8,
		paddingHorizontal: 16
	},
	details_container: {
		width: "100%",
		backgroundColor: Colors.whiteLight,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 8,
		paddingHorizontal: 16
	}
})

export default MealItem;