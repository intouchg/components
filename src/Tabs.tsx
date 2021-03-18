import React, { useState } from 'react'
import { TabsContext } from './TabsContext'
import { TabActivate } from './TabActivate'
import { TabContent } from './TabContent'

const Tabs = ({
	children,
	defaultActiveId,
}: {
    children: React.ReactNode
    defaultActiveId?: string
}) => {
	const [ activeId, setActiveId ] = useState(defaultActiveId)

	return (
		<TabsContext.Provider value={{ activeId, setActiveId }}>
			{children}
		</TabsContext.Provider>
	)
}

Tabs.displayName = 'Tabs'
Tabs.Activate = TabActivate
Tabs.Content = TabContent

export { Tabs }
