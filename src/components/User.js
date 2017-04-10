import React, { PropTypes } from 'react'

const userDetail= (user) => (
		Object.getOwnPropertyNames(user).map((val, idx, ary)=>
				<li key={idx}><span>{val}</span>{user[val]}</li>
			)
	)

const User = ({onClick, user, selectUId}) => {
	if (selectUId===user.userid) {
		return (
			<ul onClick={onClick} className="active">
				{userDetail(user)}
			</ul>
		)
	}
	return (
		<ul onClick={onClick}>
			{userDetail(user)}
		</ul>
	)
}


export default User