import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { checkboxSharedStyles } from './Checkbox'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const RadioContainer = styled.span<StyleProps & VariantProps>`
    span {
        border-radius: 9999px;
    }

    ${checkboxSharedStyles}
    ${variantsFunction('radios')}
    ${styleFunctions}
    ${sx}
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
