import React, { useContext } from 'react'
import styled from 'styled-components'
import { AccordionContext } from './AccordionContext'

const OverflowContainer = styled.div`
	overflow: hidden;
`

const AccordionCollapse = ({
	id,
	children,
}: {
    id: string
    children: (active: boolean) => React.ReactNode
}) => {
	const { activeIds } = useContext(AccordionContext)
	const active = activeIds.includes(id)

	return (
		<OverflowContainer>
			{children(active)}
		</OverflowContainer>
	)
}

AccordionCollapse.displayName = 'AccordionCollapse'

export { AccordionCollapse }
