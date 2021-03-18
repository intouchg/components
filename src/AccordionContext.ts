import { createContext } from 'react'

type AccordionContext = {
    activeIds: string[]
    toggleById: (id: string) => void
}

const AccordionContext = createContext({} as AccordionContext)
AccordionContext.displayName = 'AccordionContext'

export { AccordionContext }