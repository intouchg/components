import React, { useRef, useState, useContext } from 'react'
import { FormContext } from './Form'
import { callAll } from './core'
import type { FormItemValidator, FormItemValidatorObject, FormValidatorFunction, FormErrorObject, FormValidatorValidity } from './index'

export type GenericTarget = { value: string, type?: string }

export type FormElement = HTMLInputElement | HTMLSelectElement | GenericTarget

const getTargetValue = (target: FormElement) => {
	if (target.type && target.type === 'select-multiple') {
		return Array.from((target as HTMLSelectElement).options)
			.filter((option) => option.selected)
			.map((option) => option.value)
	}
	
	return (target as HTMLInputElement).value
}

const isBinaryInput = (type: string | undefined) => type && (type === 'radio' || type === 'checkbox' || type === 'binary')

const FormItem = ({
	id,
    validators = [],
    children,
}: {
    id: string
    validators?: FormItemValidator[]
    children: ({ bind, validating }: {
        bind: <T extends { [key: string]: any }>(props?: T) => {
            onChange: (...args: any[]) => void
            onBlur: (...args: any[]) => void
        },
        validating: true | undefined,
    }) => React.ReactNode
}) => {
    const validationId = useRef(0)
    const cancelValidate = useRef<((validity: FormValidatorValidity) => void) | null>(null)
    const onChangeTimeoutId = useRef(0)
    const hasChangedSinceValidate = useRef(false)
    const { formValues, setFormValues, formErrors, setFormErrors, formValidations, setFormValidations } = useContext(FormContext)

    const validate = (value: string | string[]): Promise<FormValidatorValidity> => new Promise(async (resolve) => {
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

        if (!formValidations[id]) {
            setFormValidations((state) => ({ ...state, [id]: true }))
        }

        const errors: FormErrorObject[] = []

        await Promise.all(validators!.map(async (validator) => {
            const isFunction = typeof validator === 'function'
            const validatorFn = isFunction ? (validator as FormValidatorFunction) : (validator as FormItemValidatorObject).validator
            const validity = await Promise.resolve(validatorFn({ ...formValues, [id]: value }))
            const errorStrings: string[] = []

            if (typeof validity === 'string') {
                errorStrings.push(validity)
            }
            else if (typeof validity === 'object' && validity.some((v) => typeof v === 'string')) {
                errorStrings.push(...validity.filter((v) => typeof v === 'string') as string[])
            }

            if (errorStrings) {
                const errorData = isFunction ? {} : {
                    exclusive: (validator as FormItemValidatorObject).exclusive,
                    priority: (validator as FormItemValidatorObject).priority,
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

    const handleChange = async (target: FormElement, doSetFormValues = false, skipValidate = false) => {
        const value = getTargetValue(target)
        const { id: validityId, result, errors } = !skipValidate ? await validate(value) : { id: null, result: true, errors: undefined }

        if (result === null || validityId !== validationId.current) {
            return
        }

        setFormValidations((state) => ({ ...state, [id]: undefined }))
        hasChangedSinceValidate.current = false

        if (result === false) {
            setFormErrors((state) => ({
                ...state,
                [id]: [
                    ...(state[id] || []).filter((error) => error.id),
                    ...errors!,
                ]
            }))
        }
        else if (result === true) {
            if (formErrors[id]) {
                setFormErrors((state) => {
                    const filteredErrs = (state[id] || []).filter((error) => error.id)
                    return {
                        ...state,
                        [id]: filteredErrs.length ? filteredErrs : undefined,
                    }
                })
            }
            if (doSetFormValues) {
                setFormValues((state) => ({ ...state, [id]: value }))
            }
        }
    }

    const onChange = async ({ target }: React.ChangeEvent<FormElement>) => {
        hasChangedSinceValidate.current = true
        if (isBinaryInput(target.type)) {
            handleChange(target, true)
        }
        else if (formErrors[id]) {
            clearTimeout(onChangeTimeoutId.current)
            onChangeTimeoutId.current = setTimeout(async () => handleChange(target, false), 350) as any
        }
    }

    const onBlur = async ({ target }: React.ChangeEvent<FormElement>) => {
        if (!isBinaryInput(target.type)) {
            handleChange(target, true, !hasChangedSinceValidate.current)
        }
    }

    // Merge user-provided props, then return all props and event listeners
    const bind = <T extends { [key: string]: any }>(props: T = {} as T) => ({
        // TO DO: Add accessibility props here
        ...props,
        onChange: callAll((props as any).onChange, onChange),
        onBlur: callAll((props as any).onBlur, onBlur),
    })

	return (
        <>
            {children({ bind, validating: formValidations[id] })}
        </>
	)
}

FormItem.displayName = 'FormItem'

export { FormItem }
