import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps } from './core'

export const checkboxSharedStyles = css`
    box-sizing: border-box;
    position: relative;
    display: inline-flex;

    input {
        position: absolute;
        margin: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }

    span {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1em;
        height: 1em;
        border-style: solid;
        pointer-events: none;
    }

    span svg {
        position: absolute;
        opacity: 0;
    }

    input:checked + span svg {
        opacity: 1;
    }

    input:focus-visible + span {
        outline: 2px auto #005FD7;
        outline: 2px auto -webkit-focus-ring-color;
        outline-offset: 3px;
    }
`


const CheckboxContainer = styled.span<StyleProps & VariantProps>`
    span {
        border-radius: 2px;

        ${checkboxSharedStyles}
        ${variantsFunction('checkboxes')}
        ${styleFunctions}
        ${sx}
    }
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

;(Checkbox as any).themeComponent = 'checkbox'

Checkbox.displayName = 'Checkbox'

export { Checkbox }
