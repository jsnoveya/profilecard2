import React, { PropTypes } from 'react'
const options = [
	"PHP軟體工程師",
	"Javascript軟體工程師",
	"視覺設計師, UX/UI",
	"Unity遊戲工程師",
	"網站前端工程師"]

const skills = [
	"javascript(ES6)",
	"HTML5",
	"NodeJS",
	"PHP",
	"TCP/IP",
	"CSS"]

const EditUserProfile = ({selectUser, onUserChange, onUserClick}) => {
	console.log('selectUser')
	console.log(selectUser)
	console.log("end")
	return (
		<div>
			<form onSubmit={e => e.preventDefault()}>
				<input type="text" id="username" value={selectUser.username} placeholder="中文名字" onChange={(e)=>onUserChange(selectUser,e)}/><br/>
				<input type="file" id={selectUser.userimg} /><br/>
				<select id="jobtitle" value={selectUser.jobtitle} onChange={(e)=>onUserChange(selectUser,e)}>
        {options.map((opt, idx) => <option value={opt}>{opt}</option>)}
      </select><br/>

      <input type="radio" name="gender" id="male" value="男" checked={selectUser.gender==='male'} />
      <label htmlFor="male">男</label>
			<input type="radio" name="gender" id="female" value="女" checked={selectUser.gender==='female'} />
			<label htmlFor="female">女</label><br/>

			<input type="tel" id="mobile" value={selectUser.mobile} onChange={(e)=>onUserChange(selectUser,e)}/><br/>
			<input type="email" id="email" value={selectUser.email} onChange={(e)=>onUserChange(selectUser,e)}/><br/>

			{skills.map((val, idx) =>
				<label htmlFor={"skill"+idx}>
					<input type="checkbox"
					 id={"skill"+idx}
					 value={val}
					 checked={(selectUser.skill.find(el=>el===val))!==undefined} />{val}</label>
			)}
			<br/>
			<button name="reset" onClick={e=>onUserClick(e)}>取消</button>
      <button name="submit" onClick={e=>onUserClick(selectUser, e)}>送出</button>
			<p>{selectUser.userid}</p>
			</form>
		</div>
	)
}

export default EditUserProfile