import Category from '../models/Category';
import Colors from '../constants/Colors/light'

export const Categories = [
	new Category('c1', 'Italian', '#f5428d', Colors.white),
	new Category('c2', 'Quick & Easy', '#f54242', Colors.white),
	new Category('c3', 'Hamburgers', '#f5a442', Colors.black),
	new Category('c4', 'German', '#f5d142', Colors.black),
	new Category('c5', 'Light & Lovely', '#368dff', Colors.white),
	new Category('c6', 'Exotic', '#41d95d', Colors.black),
	new Category('c7', 'Breakfast', '#9eecff', Colors.black),
	new Category('c8', 'Asian', '#b9ffb0', Colors.black),
	new Category('c9', 'French', '#ffc7ff', Colors.black),
	new Category('c10', 'Summer', '#47fced', Colors.black)
];