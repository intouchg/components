import React, { useContext } from 'react'
import { ActivatablesContext } from './ActivatablesContext'

const Activatable = ({
	id,
	children,
}: {
    id: string
    children: (props: {
		active: boolean
		toggleActive: () => void
		activeIds: string[]
		setActiveIds: (ids: string[]) => void
	}) => React.ReactNode
}) => {
	const { activeIds, setActiveIds, toggleById } = useContext(ActivatablesContext)
	const active = activeIds.includes(id)
	const toggleActive = () => toggleById(id)
	return children({ active, toggleActive, activeIds, setActiveIds })
}

Activatable.displayName = 'Activatable'

export { Activatable }
