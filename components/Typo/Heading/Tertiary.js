import React from 'react'
import {Text, StyleSheet} from 'react-native'

import Colors from '../../../constants/Colors/light'

const Tertiary = props => {
	return (
		<Text style={styles.heading_tertiary}>{props.text}</Text>
	)
}

const styles = StyleSheet.create({
	heading_tertiary : {
		fontSize: 16,
		fontFamily: 'lato-italic',
		color: Colors.black,
		textTransform: "capitalize"
	}
})

export default Tertiary;