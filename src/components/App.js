import React from 'react'
import PageHeader from './PageHeader'
import FilterBar from './FilterBar'
import VisibleUserList from '../containers/VisibleUserList'
import EditUserForm from '../containers/EditUserForm'


const App = () => (
	<div>
		<PageHeader text='公司員工專區' />
		<FilterBar />
		<VisibleUserList />
		<EditUserForm />
  </div>
)

export default App
