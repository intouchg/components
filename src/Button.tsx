import React from 'react'
import styled from 'styled-components'
import { defaultVariantName, componentVariantsPropertyMap } from '@i/theme'
import { styleFunctions, variantsFunction, hoverColor, activeColor } from './core'
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
	${variantsFunction(componentVariantsPropertyMap.button)}
	${styleFunctions}
	${hoverColor}
	${activeColor}
`

Button.defaultProps = { variant: defaultVariantName }

;(Button as any).themeComponent = 'button'

Button.displayName = 'Button'

export { Button }
