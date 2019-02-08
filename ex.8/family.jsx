import React from 'react'

export default props => (
	<div>
		<h1>Família</h1>
		{/* Last webpack version supports spread */}
		{ React.cloneElement(props.children, ...props) }
	</div>
)