const imgsrc = "http://i4.photobucket.com/albums/y109/ddt218/tumblr_o2rhqonj2d1ucjv8vo1_1280%201_zpsx7fmopvr.gif"

// test data
const USERS = [{
	userid: 3,
	username: "王小明",
	userimg: imgsrc,
	jobtitle: "Javascript軟體工程師",
	gender: "male",
	mobile: "0933121553",
	email: "ming@gmail.com",
	skill: ["javascript(ES6)", "HTML5", "NodeJS"]
},{
	userid: 5,
	username: "張宅宅",
	userimg: imgsrc,
	jobtitle: "視覺設計師, UX/UI",
	gender: "female",
	mobile: "0988557669",
	email: "jia@gmail.com",
	skill: ["CSS", "HTML5"]
}]

export const user = (state = {}, action) => {
	switch (action.type) {
		case "EDIT_USER":
			console.log(Object.assign({}, action.user, action.editdata))
			return Object.assign({}, action.user, action.editdata)
		case "UPDATE_USER":
			return action.user
		default:
			return state
	}
}

const users = (state = USERS, action) => {
	switch (action.type) {
		case "UPDATE_USER":
			return state.map(t => user(t, action))
		default:
			return state
	}
}

export default users