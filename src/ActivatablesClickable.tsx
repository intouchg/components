import React, { useContext } from 'react'
import { ActivatablesContext } from './ActivatablesContext'

const ActivatablesClickable = ({
	id,
	children,
}: {
    id: string
    children: (active: boolean) => React.ReactNode
}) => {
	const { activeIds, toggleById } = useContext(ActivatablesContext)
	const active = activeIds.includes(id)

	return (
		<div
			style={{ cursor: 'pointer' }}
			onClick={() => toggleById(id)}
		>
			{children(active)}
		</div>
	)
}

ActivatablesClickable.displayName = 'ActivatablesClickable'

export { ActivatablesClickable }
