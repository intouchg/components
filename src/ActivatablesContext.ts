import { createContext } from 'react'

type ActivatablesContext = {
    activeIds: string[]
    setActiveIds: (ids: string[]) => void
    toggleById: (id: string) => void
}

const ActivatablesContext = createContext({} as ActivatablesContext)

ActivatablesContext.displayName = 'ActivatablesContext'

export { ActivatablesContext }