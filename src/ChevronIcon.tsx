import React from 'react'
import { Icon } from './index'

const ChevronIcon = (props: React.ComponentProps<typeof Icon>) => (
    <Icon
        viewBox="0 0 50 50"
        {...props}
    >
		<path d="M10 11C9.7 11 9.5 11.1 9.3 11.3L3.3 17.3C2.9 17.7 2.9 18.3 3.3 18.7L24.3 39.7C24.7 40.1 25.3 40.1 25.7 39.7L46.7 18.7C47.1 18.3 47.1 17.7 46.7 17.3L40.7 11.3C40.3 10.9 39.7 10.9 39.3 11.3L25 25.6 10.7 11.3C10.5 11.1 10.3 11 10 11Z" />
	</Icon>
)

export { ChevronIcon }