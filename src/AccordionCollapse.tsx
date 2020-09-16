import React, { useContext, useState, useRef, useLayoutEffect } from 'react'
import { AccordionContext } from './index'

// TO DO: Recalculate measurements on debounced window resize.
const AccordionCollapse = ({
	id,
	children,
}: {
    id: string
    children: (active: boolean) => React.ReactNode
}) => {
	const { activeIds } = useContext(AccordionContext)
	const active = activeIds.includes(id)
	const [ size, setSize ] = useState([ 0, 0 ])
	const ref = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		if (ref.current) {
			setSize([ ref.current.offsetWidth, ref.current.offsetHeight ])
		}
	}, [ setSize, ref.current ])

	return (
		<div style={{ overflow: 'hidden' }}>
			<div ref={ref}>
				{children(active)}
			</div>
		</div>
	)
}

AccordionCollapse.displayName = 'AccordionCollapse'

export { AccordionCollapse }
