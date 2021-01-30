import React from 'react'
import { Icon } from './index'

const CheckIcon = (props: React.ComponentProps<typeof Icon>) => (
    <Icon
        viewBox="0 0 24 24"
        {...props}
    >
		<path d="M20.3 2l-11.3 11.6-5.3-5-3.7 3.7 9 8.7 15-15.3z" />
	</Icon>
)

export { CheckIcon }