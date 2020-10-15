import React, { useContext } from 'react'
import { TabsContext } from './Tabs'

const TabActivate = ({
	id,
	children,
}: {
    id: string
    children: (active: boolean) => React.ReactNode
}) => {
	const { activeId, setActiveId } = useContext(TabsContext)
	const active = activeId === id
	const handleClick = () => setActiveId(id)

	return (
		<div
			style={{ cursor: 'pointer' }}
			onClick={handleClick}
		>
			{children(active)}
		</div>
	)
}

TabActivate.displayName = 'TabActivate'

export { TabActivate }
