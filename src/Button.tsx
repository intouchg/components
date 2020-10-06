import React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { styleFunctions, hoverColorStyleFunction, activeColorStyleFunction } from './core'
import type { StyleProps, VariantProps, HoverColorProps, ActiveColorProps } from './core'

const Button = styled.button<
	StyleProps
	& VariantProps
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
	${variant({ scale: 'buttons', variants: {} })}
`

Button.defaultProps = {
	variant: 'primary',
	// color: 'button.color',
	// backgroundColor: 'button.backgroundColor',
	// hoverColor: 'button.hoverColor',
	// hoverBackgroundColor: 'button.hoverBackgroundColor',
	// hoverBorderColor: 'button.hoverBorderColor',
	// activeColor: 'button.activeColor',
	// activeBackgroundColor: 'button.activeBackgroundColor',
	// activeBorderColor: 'button.activeBorderColor',
	// borderColor: 'button.borderColor',
	// border: 'button.border',
	// borderWidth: 'button.borderWidth',
	// borderStyle: 'button.borderStyle',
	// borderRadius: 'button.borderRadius',
	// fontFamily: 'button.fontFamily',
	// fontSize: 'button.fontSize',
	// fontWeight: 'button.fontWeight',
}

Button.displayName = 'Button'

export { Button }
