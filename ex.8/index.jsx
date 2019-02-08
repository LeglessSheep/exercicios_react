import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './Member'

ReactDOM.render(
	<Family lastName='Silva'>
		<Member name='Josué'/>
		<Member name='Rafael'/>
		<Member name='Julia'/>
	</Family>,
	document.getElementById('app')
)

