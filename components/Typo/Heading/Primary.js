import React from 'react'
import {Text, StyleSheet} from 'react-native'

import Colors from '../../../constants/Colors/light'

const Primary = props => {
	return (
		<Text style={styles.heading_primary}>{props.text}</Text>
	)
}

const styles = StyleSheet.create({
	heading_primary: {
		marginBottom: 8,
		fontSize: 18,
		fontFamily: 'lato-regular',
		textTransform: "uppercase"
	},
})

export default Primary;