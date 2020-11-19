import React, { useEffect } from 'react'
import { View, Switch, StyleSheet, Platform } from 'react-native'

import Body from '../Typo/Body/Body'

import Colors from '../../constants/Colors/light'

const FilterItem = props => {

	return (
		<View style={styles.container}>
			<Body text={props.text} />
			<Switch value={props.state} onValueChange={newValue => {console.log(newValue); props.onChange(newValue) }} trackColor={{true: Colors.primaryLight, false: Colors.whiteDark}} thumbColor={Platform.OS === 'android' ?  Colors.primary : ""}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 4, paddingHorizontal: 4 }
})

export default FilterItem;