import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { defaultVariantName, themePaddingProps, themeBorderProps } from '@i/theme'
import { styleFunctions, variantsFunction, filterThemeProps, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const paddingAndBorderProps = [
    ...themePaddingProps,
    ...themeBorderProps,
]

const SelectContainer = styled.span<StyleProps & VariantProps>`
    ${(props) => {
        const styleProps = styleFunctions(props)
        const variantProps = variantsFunction('selects')(props)
        const filteredStyleProps = filterThemeProps(styleProps, paddingAndBorderProps)
        const filteredVariantProps = filterThemeProps(variantProps, paddingAndBorderProps)

        return css`
            box-sizing: border-box;
            position: relative;
            display: block;
            background-color: #ffffff;

            select {
                appearance: none;
                width: 100%;
                margin: 0;
                border-style: none;
                padding: 0;
                font-family: inherit;
                font-size: inherit;
                line-height: inherit;
                color: inherit;
                background-color: transparent;
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
                justify-content: center;
                top: 0;
                bottom: 0;
                right: 0;
                width: 1em;
                font-family: inherit;
                font-size: inherit;
                line-height: inherit;
                border-style: none;
                color: inherit;
                background-color: inherit;
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
