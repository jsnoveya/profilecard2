// action type
const ADD_USER = 'ADD_USER'
const SELECT_USER = 'SELECT_USER'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const EDIT_USER = 'EDIT_USER'
const RESET_USER = 'RESET_USER'
const UPDATE_USER = 'UPDATE_USER'

// const & let
export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_MALE: 'SHOW_MALE',
	SHOW_FEMALE: 'SHOW_FEMALE'
};

const EditStatus = {
	LOAD: 'LOAD',
	CHANGE: 'CHANGE',
	RESET: 'RESET'
}

let nextUserId = 0;

// action creator
export function addUser(userdata) {
	return {
	  type: ADD_USER,
	  userdata,
	  id: nextUserId++
	}
}

export function selectUser(id) {
	return {
		type: SELECT_USER,
		status: EditStatus.LOAD,
		id
	}
}

export function editUser(user, editdata) {
	return {
		type: EDIT_USER,
		status: EditStatus.CHANGE,
		user,
		editdata
	}
}

export function resetUser() {
	return {
		type: RESET_USER,
		status: EditStatus.RESET
	}
}

export function updateUser(user) {
	return {
		type: UPDATE_USER,
		status: EditStatus.UPDATE_USER,
		user
	}
}

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}