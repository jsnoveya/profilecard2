import { connect } from 'react-redux'
import { selectUser } from '../actions/action'
import UserList from '../components/UserList'

const getVisibleUsers = (users, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return users
		case 'SHOW_MALE':
			return users.filter(t => t.gender==='male')
		case 'SHOW_FEMALE':
			return users.filter(t => t.gender==='female')
		default:
      throw new Error('Unknown filter: ' + filter)
	}
}

// 讀取state
const mapStateToProps = (state) => {
	return {
		users: getVisibleUsers(state.users, state.visibilityFilter),
		selectUId: state.selectUser.id
	}
}

// dispatch
const mapDispatchToProps = (dispatch) => {
	return {
		onUserClick: (id) => {
			dispatch(selectUser(id))
		}
	}
}

// connect
const VisibleUserList = connect (
	mapStateToProps,
	mapDispatchToProps
)(UserList)

export default VisibleUserList
