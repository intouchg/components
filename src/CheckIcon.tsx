import React from 'react'
import { Svg } from './index'

const CheckIcon = (props: React.ComponentProps<typeof Svg>) => (
    <Svg
        viewBox="0 0 24 24"
        {...props}
    >
		<path d="M20.3 2l-11.3 11.6-5.3-5-3.7 3.7 9 8.7 15-15.3z" />
	</Svg>
)

export { CheckIcon }