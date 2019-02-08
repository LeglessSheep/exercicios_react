import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './Member'

ReactDOM.render(
	<Family>
		<Member name='Josué' lastName='Silva'/>
	</Family>,
	document.getElementById('app')
)

