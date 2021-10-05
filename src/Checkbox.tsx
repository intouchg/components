import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { defaultVariantName, borderProps, backgroundProps } from '@intouchg/theme'
import { styleFunctions, variantsFunction, filterThemeProps, sx } from './core'
import { CheckIcon } from './CheckIcon'
import type { StyleProps, VariantProps, SXProps } from './core'

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

    input:disabled {
        cursor: auto;
    }

    span {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #767676;
        color: rgba(0, 0, 0, 0);
        pointer-events: none;
    }

    span svg {
        width: 100%;
        opacity: 0;
    }

    input:checked + span {
        color: inherit;
    }

    input:checked + span svg {
        opacity: 1;
    }

    input:disabled + span {
        background-color: #f8f8f8;
        border-color: #d1d1d1;
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

const CheckboxContainer = styled.span<
    & StyleProps
    & VariantProps
    & SXProps
>`
    ${checkboxSharedStyles}

    input:checked:disabled + span {
        background-color: #d1d1d1;
        border-color: #d1d1d1;
        color: #efefef;
        fill: #efefef;
    }

    ${(props) => {
        const variantProps = variantsFunction('checkboxes')(props)
        const styleProps = styleFunctions(props)

        return css`
            ${variantProps}
            ${styleProps}
            padding: 0;
            background: unset;
            background-color: unset;
            border-style: none;

            span {
                border-radius: 2px;
                ${filterThemeProps(variantProps, borderAndBackgroundProps)}
                ${filterThemeProps(styleProps, borderAndBackgroundProps)}
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
            disabled={disabled}
            id={id}
            name={name}
            value={value}
            ref={ref}
            onChange={onChange}
        />
        <span aria-hidden="true">
            {icon || (<CheckIcon />)}
        </span>
    </CheckboxContainer>
))

Checkbox.defaultProps = { variant: defaultVariantName }

;(Checkbox as any).themeComponent = 'checkbox'

Checkbox.displayName = 'Checkbox'

export { Checkbox }
