import React from 'react'
import { Svg } from './index'

const DotIcon = (props: React.ComponentProps<typeof Svg>) => (
	<Svg
		viewBox="0 0 10 10"
		{...props}
	>
		<circle
			cx="5"
			cy="5"
			r="3.5"
		/>
	</Svg>
)

export { DotIcon }