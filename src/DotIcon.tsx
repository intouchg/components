import React from 'react'
import { Icon } from './index'

const DotIcon = (props: React.ComponentProps<typeof Icon>) => (
	<Icon
		viewBox="0 0 10 10"
		{...props}
	>
		<circle
			cx="5"
			cy="5"
			r="3.5"
		/>
	</Icon>
)

export { DotIcon }