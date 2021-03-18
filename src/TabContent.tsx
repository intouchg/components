import React, { useContext } from 'react'
import { TabsContext } from './TabsContext'

const TabContent = ({
	id,
	children,
}: {
    id: string
    children: (active: boolean) => React.ReactNode
}) => {
	const { activeId } = useContext(TabsContext)
	const active = activeId === id

	return (
		<div style={{ overflow: 'hidden' }}>
			{children(active)}
		</div>
	)
}

TabContent.displayName = 'TabContent'

export { TabContent }
