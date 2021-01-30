import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { defaultVariantName, borderProps, paddingProps, backgroundProps } from '@i/theme'
import { styleFunctions, variantsFunction, filterThemeProps, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const filterProps = [
    ...backgroundProps,
    ...borderProps,
    ...paddingProps,
]

const SelectContainer = styled.span<StyleProps & VariantProps>`
    ${(props) => {
        const styleProps = styleFunctions(props)
        const variantProps = variantsFunction('selects')(props)
        const filteredStyleProps = filterThemeProps(styleProps, filterProps)
        const filteredVariantProps = filterThemeProps(variantProps, filterProps)

        return css`
            box-sizing: border-box;
            position: relative;
            display: block;

            select, select + span {
                font-family: inherit;
                font-size: inherit;
                line-height: inherit;
                padding: 0 0.25em;
                color: inherit;
                background-color: #ffffff;
                border-width: 1px;
                border-style: solid;
                border-color: #767676;
                border-radius: 1px;
            }

            select {
                appearance: none;
                width: 100%;
                padding: 0;
                outline: none;
                cursor: pointer;
                ${filteredVariantProps}
                ${filteredStyleProps}
                margin: 0;
            }

            select + span {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                top: 0;
                bottom: 0;
                right: 0;
                width: 0.75em;
                pointer-events: none;
                ${filteredVariantProps}
                ${filteredStyleProps}
                padding-left: 0.25em;
                border-left-style: none;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }

            select:focus-visible + span + span {
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                outline: 2px auto #005FD7;
                outline: 2px auto -webkit-focus-ring-color;
            }

            select:disabled, select:disabled + span {
                fill: #a6a6a6;
                background-color: #f8f8f8;
                border-color: #d1d1d1;
                cursor: auto;
            }

            ${variantProps}
            ${styleProps}
            ${sx}
            padding: 0;
            border-style: none;
        `
    }}
`

const SelectIcon = () => (
    <svg viewBox="0 0 50 50">
        <path d="M10 11C9.7 11 9.5 11.1 9.3 11.3L3.3 17.3C2.9 17.7 2.9 18.3 3.3 18.7L24.3 39.7C24.7 40.1 25.3 40.1 25.7 39.7L46.7 18.7C47.1 18.3 47.1 17.7 46.7 17.3L40.7 11.3C40.3 10.9 39.7 10.9 39.3 11.3L25 25.6 10.7 11.3C10.5 11.1 10.3 11 10 11Z" />
    </svg>
)

const Select = forwardRef((
    {
        disabled,
        id,
        name,
        value,
        onChange,
        icon,
        children,
        ...props
    }: React.ComponentProps<typeof SelectContainer>,
    ref: React.ForwardedRef<HTMLSelectElement | null>,
) => (
    <SelectContainer {...props}>
        <select
            disabled={disabled}
            id={id}
            name={name}
            value={value}
            ref={ref}
            onChange={onChange}
        >
            {children}
        </select>
        <span aria-hidden="true">
            {icon || (<SelectIcon />)}
        </span>
        <span aria-hidden="true" />
    </SelectContainer>
))

Select.defaultProps = { variant: defaultVariantName }

;(Select as any).themeComponent = 'select'

Select.displayName = 'Select'

export { Select }
