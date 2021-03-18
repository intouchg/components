import React, { useState, useEffect, useRef } from 'react'
import { AccordionContext } from './AccordionContext'

const Accordion = ({
	defaultActiveId,
	allowMultipleActive = false,
	children,
}: {
    defaultActiveId?: string
    allowMultipleActive?: boolean
    children: React.ReactNode
}) => {
	const previousDefaultActiveId = useRef(defaultActiveId)
	const [ activeIds, setActiveIds ] = useState(defaultActiveId ? [ defaultActiveId ] : [])

	useEffect(() => {
		// TO DO: Handle defaultActiveId changing after initial render
		if (activeIds.join('') === [ previousDefaultActiveId.current ].join('')) {
			previousDefaultActiveId.current = defaultActiveId
			setActiveIds(defaultActiveId ? [ defaultActiveId ] : [])
		}
	}, [ defaultActiveId ])

	const toggleById = (id: string) => {
		if (activeIds.includes(id)) {
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
		<AccordionContext.Provider value={{ activeIds, toggleById }}>
			{children}
		</AccordionContext.Provider>
	)
}

Accordion.displayName = 'Accordion'

export { Accordion }
