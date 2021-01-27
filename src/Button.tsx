import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, hoverColorStyleFunction, activeColorStyleFunction } from './core'
import type { StyleProps, VariantProps, HoverColorProps, ActiveColorProps } from './core'

const Button = styled.button<
	& StyleProps
	& VariantProps
	& HoverColorProps
	& ActiveColorProps
>`
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
	${hoverColorStyleFunction}
	${activeColorStyleFunction}
`

Button.defaultProps = { variant: defaultVariantName }

Button.displayName = 'Button'

export { Button }
