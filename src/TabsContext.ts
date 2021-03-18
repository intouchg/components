import { createContext } from 'react'

type TabsContext = {
    activeId: string | undefined
    setActiveId: (id: string) => void
}

const TabsContext = createContext({} as TabsContext)
TabsContext.displayName = 'TabsContext'

export { TabsContext }