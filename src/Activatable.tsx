import React, { useContext } from 'react'
import { ActivatablesContext } from './ActivatablesContext'

const Activatable = ({
	id,
	children,
}: {
    id: string
    children: (props: { active: boolean, onClick: () => void }) => React.ReactNode
}) => {
	const { activeIds, toggleById } = useContext(ActivatablesContext)
	const active = activeIds.includes(id)
	const onClick = () => toggleById(id)
	return children({ active, onClick })
}

Activatable.displayName = 'Activatable'

export { Activatable }
