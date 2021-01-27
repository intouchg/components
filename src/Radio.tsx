import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { defaultVariantName, componentVariantsPropertyMap } from '@i/theme'
import { checkboxStyles } from './Checkbox'
import { styleFunctions, variantsFunction } from './core'
import type { StyleProps, VariantProps } from './core'

const RadioContainer = styled.span<
    & StyleProps
    & VariantProps
>`
    border-radius: 9999px;
    ${checkboxStyles}
    ${variantsFunction(componentVariantsPropertyMap.radio)}
    ${styleFunctions}
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

Radio.displayName = 'Radio'

export { Radio }
