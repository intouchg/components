import React, { useState } from 'react'
import { ActivatablesContext } from './ActivatablesContext'

const Activatables = ({
	defaultActiveIds = [],
	allowMultipleActive = false,
	allowNoneActive = true,
	children,
}: {
    defaultActiveIds?: string[]
    allowMultipleActive?: boolean
	allowNoneActive?: boolean
    children: React.ReactNode
}) => {
	const [ activeIds, setActiveIds ] = useState(defaultActiveIds)

	const toggleById = (id: string) => {
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
		<ActivatablesContext.Provider value={{ activeIds, toggleById }}>
			{children}
		</ActivatablesContext.Provider>
	)
}

Activatables.displayName = 'Activatables'

export { Activatables }
