import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { checkboxSharedStyles, borderAndBackgroundProps } from './Checkbox'
import { styleFunctions, variantsFunction, filterThemeProps, sx } from './core'
import { DotIcon } from './index'
import type { StyleProps, VariantProps, SXProps } from './core'

const RadioContainer = styled.span<
    & StyleProps
    & VariantProps
    & SXProps
>`
    ${checkboxSharedStyles}

    input:checked:disabled + span {
        color: #d1d1d1;
        fill: #d1d1d1;
    }

    ${(props) => {
        const variantProps = variantsFunction('radios')(props)
        const styleProps = styleFunctions(props)

        return css`
            ${variantProps}
            ${styleProps}
            padding: 0;
            background: unset;
            background-color: unset;
            border-style: none;

            span {
                border-radius: 9999px;
                ${filterThemeProps(variantProps, borderAndBackgroundProps)}
                ${filterThemeProps(styleProps, borderAndBackgroundProps)}
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
            {icon || (<DotIcon />)}
        </span>
    </RadioContainer>
))

Radio.defaultProps = { variant: defaultVariantName }

;(Radio as any).themeComponent = 'radio'

Radio.displayName = 'Radio'

export { Radio }
