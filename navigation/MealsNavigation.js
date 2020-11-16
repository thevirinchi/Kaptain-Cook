import React from 'react'

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import FavoritesScreen from '../screens/FavoritesScreen'
import MealDetailsScreen from "../screens/MealDetailsScreen"

import {Ionicons} from '@expo/vector-icons'
import Colors from '../constants/Colors/light'

const MealsNavigator = createStackNavigator({
	Categories: CategoriesScreen,
	CategoryMeals: CategoryMealsScreen,
	MealDetails: MealDetailsScreen
})

const MealFavTabNavigator = createBottomTabNavigator({
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				return <Ionicons name="ios-restaurant" size={24} color={tabInfo.tintColor}/>
			}
		}
	},
	Favorites: {
		screen: FavoritesScreen,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				return <Ionicons name="ios-star" size={24} color={tabInfo.tintColor}/>
			}
		}
	}
},
{
	tabBarOptions: {
		activeTintColor: Colors.primary,
	}
})

export default createAppContainer(MealFavTabNavigator)