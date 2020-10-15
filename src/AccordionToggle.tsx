import React, { useContext } from 'react'
import { AccordionContext } from './index'

const AccordionToggle = ({
	id,
	children,
}: {
    id: string
    children: (active: boolean) => React.ReactNode
}) => {
	const { activeIds, toggleById } = useContext(AccordionContext)
	const active = activeIds.includes(id)

	const handleClick = () => toggleById(id)

	return (
		<div
			style={{ cursor: 'pointer' }}
			onClick={handleClick}
		>
			{children(active)}
		</div>
	)
}

AccordionToggle.displayName = 'AccordionToggle'

export { AccordionToggle }
