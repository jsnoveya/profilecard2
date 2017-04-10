import React from 'react'
import FilterLink from '../containers/FilterLink.js'

const FilterBar = () => (
	<p>
		Show:{" "}
		<FilterLink filter='SHOW_ALL'>
			All
		</FilterLink>
		{", "}
    <FilterLink filter="SHOW_MALE">
      男
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_FEMALE">
      女
    </FilterLink>
  </p>
)

export default FilterBar