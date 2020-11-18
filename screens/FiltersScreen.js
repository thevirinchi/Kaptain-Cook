import React from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import RightButton from '../components/Header/RightButton'
import Primary from '../components/Typo/Heading/Primary'
import Body from '../components/Typo/Body/Body'

import { Filters } from '../data/data'

import Colors from "../constants/Colors/light"
import { FlatList } from 'react-native-gesture-handler'

const FiltersScreen = props => {

	const renderFilterItem = itemData => {
		return (
			<View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 4, paddingHorizontal: 4}}>
				<Body text={itemData.item}/>
				<Switch/>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<Primary text="Available Filters"/>
			<FlatList numColumns={1} data={Filters} renderItem={renderFilterItem} backgroundColor={Colors.whiteLight} width={"100%"} style={{marginTop: 16}}/>
		</View>
	)
}

FiltersScreen.navigationOptions = navData => {
	return {
		headerTitle: 'Filter Recipes',
		headerStyle: {
			backgroundColor: Colors.primary
		},
		headerTintColor: Colors.whiteLight,
		headerLeft: ()=> <HeaderButtons HeaderButtonComponent={RightButton}><Item title="Menu" iconName='ios-menu' onPress={()=>{navData.navigation.toggleDrawer()}}/></HeaderButtons>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.whiteLight,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 16,
		paddingHorizontal: 24
	}
})

export default FiltersScreen;