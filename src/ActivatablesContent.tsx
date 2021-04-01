import React, { useContext } from 'react'
import styled from 'styled-components'
import { ActivatablesContext } from './ActivatablesContext'

const OverflowContainer = styled.div`
	overflow: hidden;
`

const ActivatablesContent = ({
	id,
	children,
}: {
    id: string
    children: (active: boolean) => React.ReactNode
}) => {
	const { activeIds } = useContext(ActivatablesContext)
	const active = activeIds.includes(id)

	return (
		<OverflowContainer>
			{children(active)}
		</OverflowContainer>
	)
}

ActivatablesContent.displayName = 'ActivatablesContent'

export { ActivatablesContent }
