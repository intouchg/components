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
                color: inherit;
                background-color: #ffffff;
                border-width: 1px;
                border-style: solid;
                border-color: #767676;
                border-radius: 2px;
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
                padding-left: 0.5em;
                border-left-style: none;
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
                background-color: #f8f8f8;
                border-color: #d1d1d1;
            }

            ${variantProps}
            ${styleProps}
            ${sx}
            padding: 0;
            border-style: none;
        `
    }}
`

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
            {icon}
        </span>
        <span aria-hidden="true" />
    </SelectContainer>
))

Select.defaultProps = { variant: defaultVariantName }

;(Select as any).themeComponent = 'select'

Select.displayName = 'Select'

export { Select }
