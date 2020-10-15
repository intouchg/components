import React, { useContext } from 'react'
import { FormContext } from './Form'
import type { FormErrorObject } from './Form'

const prioritySortDescending = ({ priority: a }: FormErrorObject, { priority: b }: FormErrorObject) => (b || 0) - (a || 0)

const FormError = ({
	id,
    children,
}: {
    id: string
    children: (errors: string[]) => React.ReactNode
}) => {
	const { formErrors } = useContext(FormContext)
    const errors = formErrors[id]
    
    if (!errors || errors.length === 0) {
        return null
    }

    let filteredErrors = errors

    if (errors.some((error) => error.exclusive)) {
        filteredErrors = errors.filter((error) => error.exclusive).sort(prioritySortDescending)
        // Highest priority will be first in the array
        filteredErrors.length = 1
    }
    else {
        filteredErrors.sort(prioritySortDescending)
    }
    
	return (
        <>
            {children(filteredErrors.map(({ error }) => error))}
        </>
    )
}

FormError.displayName = 'FormError'

export { FormError }
