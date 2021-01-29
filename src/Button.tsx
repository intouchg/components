import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const Button = styled.button<StyleProps & VariantProps>`
	box-sizing: border-box;
	background-color: transparent;
	border-style: none;
	padding: 0;
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	text-decoration: none;
	cursor: pointer;
	${variantsFunction('buttons')}
	${styleFunctions}
	${sx}
`

Button.defaultProps = { variant: defaultVariantName }

;(Button as any).themeComponent = 'button'

Button.displayName = 'Button'

export { Button }
