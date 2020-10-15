import React, { createContext, useState } from 'react'
import { TabActivate, TabContent } from './index'

type TabsContext = {
    activeId: string | undefined
    setActiveId: (id: string) => void
}

const TabsContext = createContext({} as TabsContext)
TabsContext.displayName = 'TabsContext'

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

export {
	Tabs,
	TabsContext,
}
