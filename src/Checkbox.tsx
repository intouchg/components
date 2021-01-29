import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { defaultVariantName, borderProps, backgroundProps } from '@i/theme'
import { styleFunctions, variantsFunction, filterThemeProps, sx } from './core'
import type { StyleProps, VariantProps } from './core'

export const checkboxSharedStyles = `
    box-sizing: border-box;
    position: relative;
    display: inline-flex;
    width: 1em;
    height: 1em;

    input, span {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0;
    }

    input {
        opacity: 0;
        cursor: pointer;
    }

    span {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        border-width: 1px;
        border-style: solid;
        border-color: #767676;
        pointer-events: none;
    }

    span svg {
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

export const borderAndBackgroundProps = [
    ...borderProps,
    ...backgroundProps,
]

const CheckboxContainer = styled.span<StyleProps & VariantProps>`
    ${checkboxSharedStyles}

    ${(props) => {
        const styleProps = styleFunctions(props)
        const variantProps = variantsFunction('checkboxes')(props)
        const filteredStyleProps = filterThemeProps(styleProps, borderAndBackgroundProps)
        const filteredVariantProps = filterThemeProps(variantProps, borderAndBackgroundProps)

        return css`
            ${variantProps}
            ${styleProps}
            background: unset;
            background-color: unset;
            border-style: none;

            span {
                border-radius: 2px;
                ${filteredStyleProps}
                ${filteredVariantProps}
            }

            ${sx}
        `
    }}
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
