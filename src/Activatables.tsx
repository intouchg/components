import React, { useState, useEffect, useRef } from 'react'
import { ActivatablesContext } from './ActivatablesContext'
import { ActivatablesClickable } from './ActivatablesClickable'
import { ActivatablesContent } from './ActivatablesContent'

const Activatables = ({
	defaultActiveId,
	allowMultipleActive = false,
	allowNoneActive = true,
	children,
}: {
    defaultActiveId?: string
    allowMultipleActive?: boolean
	allowNoneActive?: boolean
    children: React.ReactNode
}) => {
	const previousDefaultActiveId = useRef(defaultActiveId)
	const [ activeIds, setActiveIds ] = useState(defaultActiveId ? [ defaultActiveId ] : [])

	useEffect(() => {
		// TO DO: Handle defaultActiveId changing after initial render
		if (activeIds.join('') === previousDefaultActiveId.current) {
			previousDefaultActiveId.current = defaultActiveId
			setActiveIds(defaultActiveId ? [ defaultActiveId ] : [])
		}
	}, [ defaultActiveId ])

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
Activatables.Clickable = ActivatablesClickable
Activatables.Content = ActivatablesContent

export { Activatables }
