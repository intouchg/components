import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { paddingProps } from '@i/theme'
import { styleFunctions, variantsFunction, filterThemeProps, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const ToggleContainer = styled.button.attrs({
	type: 'button',
	role: 'switch',
})<StyleProps & VariantProps>`
	${(props) => {
		const styleProps = styleFunctions(props)
		const variantProps = variantsFunction('radios')(props)
		const filteredStyleProps = filterThemeProps(styleProps, paddingProps)
		const filteredVariantProps = filterThemeProps(variantProps, paddingProps)

		return css`
			box-sizing: border-box;
			position: relative;
			width: ${props.width || '3em'};
			height: ${props.height || '1.825em'};
			font-size: inherit;
			color: #ffffff;
			fill: #ffffff;
			stroke: #005FD7;
			stroke: -webkit-focus-ring-color;
			stroke-width: 1px;
			border-width: 1px;
			border-style: solid;
			border-radius: 9999px;
			cursor: pointer;
			outline: none;

			&:focus-visible {
				outline: 2px auto #005FD7;
				outline: 2px auto -webkit-focus-ring-color;
			}

			&[aria-checked=true] {
				background-color: #005FD7;
				background-color: -webkit-focus-ring-color;
				${props.backgroundColor || props.bg ? `background-color: ${String(props.backgroundColor || props.bg)};` : ''}
			}

			span {
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				top: 0;
				bottom: 0;
				right: 0;
				left: 0;
				width: ${props.height || '1.5em'};
				margin: 0;
				margin-left: -1px;
				pointer-events: none;
				transform: translateX(0);
				transition-property: transform;
				transition-timing-function: ease-out;
				transition-duration: 100ms;
				${filteredVariantProps}
				${filteredStyleProps}
			}

			span svg {
				overflow: visible;
			}

			&[aria-checked=true] span {
				transform: ${props.width ? `translateX(calc(${props.width} - ${props.height || '1.5em'}))` : `translateX(${props.height || '1.5em'})`};
			}

			${styleProps}
			${variantProps}
			padding: 0;
			background-color: currentColor;
			${sx}
		`
	}}
`

const ToggleIcon = () => (
	<svg viewBox="0 0 10 10">
		<circle
			cx="5"
			cy="5"
			r="5"
		/>
	</svg>
)

const Toggle = forwardRef((
    {
        checked,
        id,
        onClick,
        icon,
        ...props
    }: React.ComponentProps<typeof ToggleContainer>,
    ref: React.ForwardedRef<HTMLButtonElement | null>
) => (
	<ToggleContainer
		aria-checked={checked}
		id={id}
		ref={ref}
		onClick={onClick}
		{...props}
	>
		<span aria-hidden="true">
			{icon || (<ToggleIcon />)}
		</span>
	</ToggleContainer>
))

export { Toggle }