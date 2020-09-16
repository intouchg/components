import React, { createContext, useState, useRef } from 'react'

export type FormErrorObject = {
    error: string
    id?: string
    exclusive?: boolean
    priority?: number
}

type FormContext = {
    formValues: { [id: string]: string | string[] }
    setFormValues: React.Dispatch<React.SetStateAction<FormContext['formValues']>>
    formErrors: { [id: string]: FormErrorObject[] | undefined }
    setFormErrors: React.Dispatch<React.SetStateAction<FormContext['formErrors']>>
    formValidations: { [id: string]: true | undefined }
    setFormValidations: React.Dispatch<React.SetStateAction<FormContext['formValidations']>>
}

export type FormValidatorFunction = (formValues: FormContext['formValues'])
    => true | string | (true | string)[] | Promise<true | string | (true | string)>

export type FormItemValidatorObject = {
    validator: FormValidatorFunction
    exclusive?: boolean
    priority?: number
}

export type FormValidatorObject = FormItemValidatorObject & { id?: string }

export type FormItemValidator = FormValidatorFunction | FormItemValidatorObject

export type FormValidator = FormValidatorFunction | FormValidatorObject

// This type is only used internally in the Form components' validate() function
export type FormValidatorValidity =
    { id: number, result: null, errors: undefined } // This return type means the validate() call with the given id was cancelled.
    | { id: null, result: true, errors: undefined } // This return type means there were no validators to run, or validation was purposefully skipped.
    | { id: number, result: true, errors: undefined } // This return type means all validators succeeded without errors.
    | { id: number, result: false, errors: FormErrorObject[] } // This return type means some validators failed.

const FormContext = createContext({} as FormContext)
FormContext.displayName = 'FormContext'

const Form = ({
    validators = [],
	children,
}: {
    validators?: FormValidator[]
    children: ({ validate, validating }: {
        validate: () => Promise<boolean>
        validating: boolean
    }) => React.ReactNode
}) => {
    const validationId = useRef(0)
    const cancelValidate = useRef<((validity: FormValidatorValidity) => void) | null>(null)
    const [ validating, setValidating ] = useState(false)
    const [ formValues, setFormValues ] = useState<FormContext['formValues']>({})
    const [ formErrors, setFormErrors ] = useState<FormContext['formErrors']>({})
    const [ formValidations, setFormValidations ] = useState<FormContext['formValidations']>({})
    const [ submitErrors, setSubmitErrors ] = useState<FormErrorObject[]>([])

    const validate = (): Promise<FormValidatorValidity> => new Promise(async (resolve) => {
        if (cancelValidate.current) {
            cancelValidate.current({ id: validationId.current, result: null, errors: undefined })
            cancelValidate.current = null
        }

        if (!validators || validators.length === 0) {
            return resolve({ id: null, result: true, errors: undefined })
        }

        cancelValidate.current = resolve
        const validityId = validationId.current + 1
        validationId.current = validityId

        if (!validating) {
            setValidating(true)
        }

        const errors: FormErrorObject[] = []

        await Promise.all(validators!.map(async (validator) => {
            const isFunction = typeof validator === 'function'
            const validatorFn = isFunction ? (validator as FormValidatorFunction) : (validator as FormValidatorObject).validator
            const validity = await Promise.resolve(validatorFn(formValues))
            const errorStrings: string[] = []

            if (typeof validity === 'string') {
                errorStrings.push(validity)
            }
            else if (typeof validity === 'object' && validity.some((v) => typeof v === 'string')) {
                errorStrings.push(...validity.filter((v) => typeof v === 'string') as string[])
            }

            if (errorStrings) {
                const errorData = isFunction ? {} : {
                    id: (validator as FormValidatorObject).id,
                    exclusive: (validator as FormValidatorObject).exclusive,
                    priority: (validator as FormValidatorObject).priority,
                }
                errors.push(...errorStrings.map(error => ({ error, ...errorData })))
            }
        }))
    
        if (errors.length) {
            return resolve({ id: validityId, result: false, errors })
        }
        else {
            return resolve({ id: validityId, result: true, errors: undefined })
        }
    })

    const updateStates = async () => {
        const { id: validityId, result, errors } = await validate()

        if (result === null || validityId !== validationId.current) {
            return
        }

        setValidating(false)

        if (result === false) {
            const formErrs: { [id: string]: FormErrorObject[] } = {}
            const submitErrs: FormErrorObject[] = []
            errors!.forEach((error) => {
                if (error.id) {
                    if (!formErrs[error.id]) {
                        formErrs[error.id] = []
                    }
                    formErrs[error.id].push(error)
                }
                else {
                    submitErrs.push(error)
                }
            })

            setFormErrors((state) => {
                const nextState = { ...state }
                Object.entries(formErrs).forEach(([ id, errs ]) => {
                    nextState[id] = [
                        ...(state[id] || []).filter((error) => !error.id),
                        ...errs,
                    ]
                })
                return nextState
            })
            setSubmitErrors(submitErrs)
        }
        else if (result === true) {
            setFormErrors((state) => {
                const nextState: typeof state = {}
                Object.entries(state).forEach(([ id, errors ]) => {
                    nextState[id] = (errors || []).filter((error) => !error.id)
                })
                return nextState
            })
            setSubmitErrors([])
        }
    }

    const execute = async () => {
        await updateStates()

        // TO DO: need to guarantee that all FormItem async validation has completed!
        if (
            !Object.values(formErrors).some((error) => error !== undefined)
            && !Object.values(formValidations).some((validating) => validating !== true)
            && submitErrors.length === 0
        ) {
            return true
        }
        else {
            return false
        }
    }

	return (
        <FormContext.Provider
            value={{
                formValues,
                setFormValues,
                formErrors,
                setFormErrors,
                formValidations,
                setFormValidations,
            }}
        >
			{children({ validate: execute, validating })}
		</FormContext.Provider>
	)
}

Form.displayName = 'Form'

export {
	Form,
	FormContext,
}
