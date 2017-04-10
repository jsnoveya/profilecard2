const selectUser = (state={id:3, status:"LOAD"}, action) => {
	switch (action.type) {
		case "SELECT_USER":
			return Object.assign({}, state, {id:action.id})
		case "EDIT_USER":
		case "RESET_USER":
		console.log(Object.assign({}, state, {status:action.status}))
			return Object.assign({}, state, {status:action.status})
		default:
		console.log(action)
			return state
	}
}

export default selectUser