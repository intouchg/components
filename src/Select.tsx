import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { defaultVariantName, componentVariantsPropertyMap, themePaddingProps } from '@i/theme'
import { styleFunctions, variantsFunction, filterThemeProps, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const SelectContainer = styled.span<StyleProps & VariantProps>`
    ${(props) => {
        const styleProps = styleFunctions(props)
        const paddingStyleProps = filterThemeProps(styleProps, themePaddingProps)
        const variantProps = variantsFunction(componentVariantsPropertyMap.select)(props)
        const paddingVariantProps = filterThemeProps(variantProps, themePaddingProps)

        return css`
            box-sizing: border-box;
            position: relative;
            display: block;
            background-color: #ffffff;
            ${variantProps}
            ${styleProps}
            padding: 0;

            select {
                appearance: none;
                width: 100%;
                margin: 0;
                border: none;
                padding: 0;
                font-family: inherit;
                font-size: inherit;
                line-height: inherit;
                color: inherit;
                background-color: transparent;
                outline: none;
                cursor: pointer;
                ${paddingVariantProps}
                ${paddingStyleProps}
                margin: 0;
            }

            span {
                position: absolute;
                right: 0;
                width: 1em;
                font-family: inherit;
                font-size: inherit;
                line-height: inherit;
                border-style: none;
                color: inherit;
                background-color: inherit;
                pointer-events: none;
                ${paddingVariantProps}
                ${paddingStyleProps}
                padding-left: 0.5em;
            }

            ${sx}
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
    </SelectContainer>
))

Select.defaultProps = { variant: defaultVariantName }

;(Select as any).themeComponent = 'select'

Select.displayName = 'Select'

export { Select }
