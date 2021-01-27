import React from 'react'
import { forwardRef } from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, svgColorStyleFunction } from './core'
import type { StyleProps, VariantProps, SvgColorProps } from './core'

const SelectContainer = styled.span<
    & StyleProps
    & VariantProps
    & SvgColorProps
>`
    box-sizing: border-box;
    position: relative;
    display: block;
    ${styleFunctions}
    ${variantsFunction('selects')}
    padding: 0;

    select {
        appearance: none;
        width: 100%;
        margin: 0;
        background-color: transparent;
        border: none;
        padding: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        text-overflow: ellipsis;
        outline: none;
        cursor: pointer;
        ${space}
    }

    span {
        position: absolute;
        right: 0;
        width: 1em;
        pointer-events: none;
        background-color: #ffffff;
        ${space}
        ${color}
        ${svgColorStyleFunction}
        padding-left: 0.5em;
    }
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

Select.displayName = 'Select'

export { Select }
