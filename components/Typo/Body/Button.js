import React from 'react'
import {Text, StyleSheet} from 'react-native'

import Colors from '../../../constants/Colors/light'

const Button = props => {
	return (
		<Text style={styles.button}>{props.text}</Text>
	)
}

const styles = StyleSheet.create({
	button : {
		fontFamily: 'lato-bold',
		fontSize: 16,
		textTransform: "uppercase"
	}
})

export default Button;