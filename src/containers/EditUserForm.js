import { connect } from 'react-redux'
import EditUserProfile from '../components/EditUserProfile'
import { editUser, resetUser, updateUser } from '../actions/action'

const getEditUser = (users, user, selectUser) => {
	console.log(user)
	switch (selectUser.status) {
		case 'LOAD':
		case 'RESET':
			console.log(users)
			console.log(selectUser)
			console.log(users.find(t => t.userid===selectUser.id))
			return users.find(t => t.userid===selectUser.id)
		default:
			return user
	}
}

// 讀取state
const mapStateToProps = (state) => {
	return {
		selectUser: getEditUser(state.users, state.user, state.selectUser)
	}
}

// dispatch
const mapDispatchToProps = (dispatch) => {
	return {
		onUserChange: (user, e) => {
			console.log(user);
			let editdata={[e.target.id]:e.target.value}
			dispatch(editUser(user,editdata))
		},
		onUserClick: (e) => {
			console.log('onUserClick')
			if (e.target.name==="reset") dispatch(resetUser())
		}
	}
}


// connect
const EditUserForm = connect (
	mapStateToProps,
	mapDispatchToProps
)(EditUserProfile)

export default EditUserForm