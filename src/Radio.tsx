import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { checkboxSharedStyles, borderAndBackgroundProps } from './Checkbox'
import { styleFunctions, variantsFunction, filterThemeProps, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const RadioContainer = styled.span<StyleProps & VariantProps>`
    ${checkboxSharedStyles}

    input:checked:disabled + span {
        color: #d1d1d1;
    }

    ${(props) => {
        const styleProps = styleFunctions(props)
        const variantProps = variantsFunction('radios')(props)
        const filteredStyleProps = filterThemeProps(styleProps, borderAndBackgroundProps)
        const filteredVariantProps = filterThemeProps(variantProps, borderAndBackgroundProps)

        return css`
            ${variantProps}
            ${styleProps}
            background: unset;
            background-color: unset;
            border-style: none;

            span {
                border-radius: 9999px;
                ${filteredStyleProps}
                ${filteredVariantProps}
            }

            ${sx}
        `
    }}
`

const Radio = forwardRef((
    {
        checked,
        disabled,
        id,
        name,
        value,
        onChange,
        icon,
        ...props
    }: React.ComponentProps<typeof RadioContainer> & {
        id?: string
        disabled?: boolean
        name: string
        value?: string
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
        icon: React.ReactNode
    },
    ref: React.ForwardedRef<HTMLInputElement | null>,
) => (
    <RadioContainer {...props}>
        <input
            type="radio"
            checked={checked}
            disabled={disabled}
            id={id}
            name={name}
            value={value}
            ref={ref}
            onChange={onChange}
        />
        <span aria-hidden="true">
            {icon}
        </span>
    </RadioContainer>
))

Radio.defaultProps = { variant: defaultVariantName }

;(Radio as any).themeComponent = 'radio'

Radio.displayName = 'Radio'

export { Radio }
