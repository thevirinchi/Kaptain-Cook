import React from 'react'
import {Text, StyleSheet} from 'react-native'

import Colors from '../../../constants/Colors/light'

const Body = props => {
	return (
		<Text style={styles.body}>{props.text}</Text>
	)
}

const styles = StyleSheet.create({
	body : {
		fontSize: 14,
		fontFamily: 'lato-regular',
		color: Colors.black
	}
})

export default Body;