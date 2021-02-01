import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const Button = styled.button.attrs<{ variant: string, invisible?: boolean }>((props) => ({
	type: props.type || 'button',
	variant: props.invisible ? '' : props.variant,
}))<
	& StyleProps
	& VariantProps
	& { invisible?: boolean }
>`
	box-sizing: border-box;
	padding: 0;
	font: inherit;
	color: inherit;
	text-decoration: none;
	border: 1px solid;
	border-radius: 1px;
	outline: none;
	cursor: pointer;

	${(props) => props.invisible ? `
		border-style: none;
		background-color: transparent;
	` : ''}

	&:focus-visible {
        outline: 2px auto #005FD7;
        outline: 2px auto -webkit-focus-ring-color;
    }

	&:disabled {
		cursor: auto;
	}

	${variantsFunction('buttons')}
	${styleFunctions}
	${sx}
`

Button.defaultProps = { variant: defaultVariantName }

;(Button as any).themeComponent = 'button'

Button.displayName = 'Button'

export { Button }
