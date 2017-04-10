import React, { PropTypes} from 'react'
import User from './User'

const UserList = ({users, onUserClick, selectUId}) => (
	<section>
		{users.map((user) =>
			<User
				key={user.userid}
				user={user}
				selectUId={selectUId}
				onClick={() => onUserClick(user.userid)}
			/>
		)}
	</section>
)

export default UserList