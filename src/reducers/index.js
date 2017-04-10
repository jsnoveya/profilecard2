import { combineReducers } from 'redux'
import users, {user} from './users.js'
import visibilityFilter from './visibilityFilter.js'
import selectUser from './selectUser.js'


const employeeApp = combineReducers ({
	visibilityFilter,
	users,
	user,
	selectUser
})

export default employeeApp