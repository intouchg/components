import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, hoverColorStyleFunction, activeColorStyleFunction } from './core'
import type { StyleProps, VariantProps, HoverColorProps, ActiveColorProps } from './core'

const baseButtonStyles = `
	box-sizing: border-box;
	border: 0;
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	text-decoration: none;
	cursor: pointer;
`

type ButtonProps = 
	& StyleProps
	& VariantProps
	& HoverColorProps
	& ActiveColorProps

	
const Button = styled.button<ButtonProps>`
	${baseButtonStyles}
	${variantsFunction('buttons')}
	${styleFunctions}
	${hoverColorStyleFunction}
	${activeColorStyleFunction}
`

Button.defaultProps = { variant: defaultVariantName }

Button.displayName = 'Button'


const InvisibleButton = styled.button<ButtonProps>`
	${baseButtonStyles}
	background-color: transparent;
	border: 0;
	text-align: left;
	${variantsFunction('buttons')}
	${styleFunctions}
	${hoverColorStyleFunction}
	${activeColorStyleFunction}
`

InvisibleButton.displayName = 'InvisibleButton'

export { Button, InvisibleButton }
