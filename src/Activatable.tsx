import React, { useContext } from 'react'
import { ActivatablesContext } from './ActivatablesContext'
import type { ActivatableId } from './ActivatablesContext'

const Activatable = ({
	id,
	children,
}: {
    id: ActivatableId
    children: (props: {
		active: boolean
		toggleActive: () => void
		activeIds: ActivatableId[]
		setActiveIds: (ids: ActivatableId[]) => void
	}) => JSX.Element
}) => {
	const { activeIds, setActiveIds, toggleById } = useContext(ActivatablesContext)
	const active = activeIds.includes(id)
	const toggleActive = () => toggleById(id)
	return children({ active, toggleActive, activeIds, setActiveIds })
}

Activatable.displayName = 'Activatable'

export { Activatable }
