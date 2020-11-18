import React from 'react'
import {Text, StyleSheet} from 'react-native'

import Colors from '../../../constants/Colors/light'

const Secondary = props => {
	return (
		<Text style={styles.heading_secondary}>{props.text}</Text>
	)
}

const styles = StyleSheet.create({
	heading_secondary: {
		fontSize: 16,
		fontFamily: 'lato-bold',
		color: Colors.black,
		textTransform: "capitalize"
	}
})

export default Secondary;