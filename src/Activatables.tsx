import React, { useState } from 'react'
import { ActivatablesContext } from './ActivatablesContext'
import type { ActivatableId } from './ActivatablesContext'

const Activatables = ({
	defaultActiveIds = [],
	allowMultipleActive = false,
	allowNoneActive = true,
	children,
}: {
    defaultActiveIds?: ActivatableId[]
    allowMultipleActive?: boolean
	allowNoneActive?: boolean
    children: React.ReactNode
}) => {
	const [ activeIds, setActiveIds ] = useState(defaultActiveIds)

	const toggleById = (id: ActivatableId) => {
		if (activeIds.includes(id)) {
			if (!allowNoneActive && activeIds.length === 1) return
			setActiveIds((ids) => ids.filter((i) => i !== id))
		}
		else if (allowMultipleActive) {
			setActiveIds((ids) => ids.concat(id))
		}
		else {
			setActiveIds([ id ])
		}
	}

	return (
		<ActivatablesContext.Provider value={{ activeIds, setActiveIds, toggleById }}>
			{children}
		</ActivatablesContext.Provider>
	)
}

Activatables.displayName = 'Activatables'

export { Activatables }