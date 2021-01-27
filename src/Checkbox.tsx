import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction } from './core'
import type { StyleProps, VariantProps } from './core'

export const checkboxStyles = `
    box-sizing: border-box;
    position: relative;
    display: inline-flex;
    width: 1em;
    height: 1em;
    border-style: solid;

    input {
        position: absolute;
        margin: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }

    span {
        opacity: 0;
    }

    span svg {
        position: absolute;
    }

    input:checked + span {
        opacity: 1;
    }
`


const CheckboxContainer = styled.span<
    & StyleProps
    & VariantProps
>`
    ${checkboxStyles}
    ${variantsFunction('checkboxes')}
    ${styleFunctions}
`

const Checkbox = forwardRef((
	{
        checked,
        disabled,
        id,
        name,
        value,
        onChange,
        icon,
        ...props
    }: React.ComponentProps<typeof CheckboxContainer> & {
        checked: boolean
        disabled?: boolean
        id?: string
        name: string
        value?: string
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
        icon: React.ReactNode
    },
	ref: React.ForwardedRef<HTMLInputElement | null>,
) => (
	<CheckboxContainer {...props}>
		<input
			type="checkbox"
			checked={checked}
			id={id}
			name={name}
			value={value}
			ref={ref}
			onChange={onChange}
		/>
		<span aria-hidden="true">
			{icon}
		</span>
	</CheckboxContainer>
))

Checkbox.defaultProps = { variant: defaultVariantName }

Checkbox.displayName = 'Checkbox'

export { Checkbox }
