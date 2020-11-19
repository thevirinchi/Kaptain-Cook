import { MEALS } from '../../data/data'
import { SET_FILTERS, TOGGLE_FAV } from './actions'

const initState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: []
}

const mealsReducer = (state = initState, action) => {
	switch (action.type) {
		case TOGGLE_FAV:
			const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
			if (existingIndex >= 0) {
				const updatedFavMeals = [...state.favoriteMeals]
				updatedFavMeals.splice(existingIndex, 1)
				return { ...state, favoriteMeals: updatedFavMeals }
			}
			else {
				const meal = state.meals.find(meal => meal.id === action.mealId)
				return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}
			}
		case SET_FILTERS:
			const appliedFilters = action.filters
			const filteredMeals = state.meals.filter(
				meal => {
					if(appliedFilters.glutenFree && !meal.isGlutenFree) return false
					if(appliedFilters.lactosFree && !meal.islactosFree) return false
					if(appliedFilters.vegan && !meal.isVegan) return false
					if(appliedFilters.vegetarian && !meal.isVegetarian) return false
					return true
				}
			)
			return {...state, filteredMeals: filteredMeals}
		default: return state
	}
	return state
}

export default mealsReducer