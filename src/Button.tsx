import React from 'react'
import styled from 'styled-components'
import { styleFunctions, hoverColorStyleFunction, activeColorStyleFunction } from './core'
import type { StyleProps, HoverColorProps, ActiveColorProps } from './core'

const Button = styled.button<
    StyleProps
    & HoverColorProps
    & ActiveColorProps
>`
    box-sizing: border-box;
    font-size: inherit;
    line-height: inherit;
    border: 0;
    font-family: inherit;
    text-decoration: none;
    cursor: pointer;
    ${styleFunctions}
    ${hoverColorStyleFunction}
    ${activeColorStyleFunction}
`

Button.defaultProps = {
	color: 'button.color',
	backgroundColor: 'button.backgroundColor',
	hoverColor: 'button.hoverColor',
	hoverBackgroundColor: 'button.hoverBackgroundColor',
	hoverBorderColor: 'button.hoverBorderColor',
	activeColor: 'button.activeColor',
	activeBackgroundColor: 'button.activeBackgroundColor',
	activeBorderColor: 'button.activeBorderColor',
	borderColor: 'button.borderColor',
	border: 'button.border',
	borderWidth: 'button.borderWidth',
	borderStyle: 'button.borderStyle',
	borderRadius: 'button.borderRadius',
	fontFamily: 'button.fontFamily',
	fontSize: 'button.fontSize',
	fontWeight: 'button.fontWeight',
}

Button.displayName = 'Button'

export { Button }
