import { createContext } from 'react'

type ActivatablesContext = {
    activeIds: string[]
    toggleById: (id: string) => void
}

const ActivatablesContext = createContext({} as ActivatablesContext)
ActivatablesContext.displayName = 'ActivatablesContext'

export { ActivatablesContext }