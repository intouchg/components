import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { defaultVariantName, themeBorderProps } from '@i/theme'
import { checkboxSharedStyles } from './Checkbox'
import { styleFunctions, variantsFunction, filterThemeProps, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const RadioContainer = styled.span<StyleProps & VariantProps>`
    ${checkboxSharedStyles}

    ${(props) => {
        const styleProps = styleFunctions(props)
        const variantProps = variantsFunction('radios')(props)
        const borderStyleProps = filterThemeProps(styleProps, themeBorderProps)
        const borderVariantProps = filterThemeProps(variantProps, themeBorderProps)

        return css`
            ${variantProps}
            ${styleProps}
            border-style: none;

            span {
                border-radius: 9999px;
                ${borderStyleProps}
                ${borderVariantProps}
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
        icon,
        ...props
    }: React.ComponentProps<typeof RadioContainer> & {
        id?: string
        disabled?: boolean
        name: string
        value?: string
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
