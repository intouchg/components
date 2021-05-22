import { createContext } from 'react'

export type ActivatableId = string | number

type ActivatablesContext = {
    activeIds: ActivatableId[]
    setActiveIds: (ids: ActivatableId[]) => void
    toggleById: (id: ActivatableId) => void
}

const ActivatablesContext = createContext({} as ActivatablesContext)

ActivatablesContext.displayName = 'ActivatablesContext'

export { ActivatablesContext }