import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, hoverColorStyleFunction, activeColorStyleFunction, visitedColorStyleFunction } from './core'
import type { StyleProps, VariantProps, HoverColorProps, ActiveColorProps, VisitedColorProps } from './core'

// TO DO: Add visitedColor, activeColor, focusedColor (?) etc.
const Link = styled.a<
	StyleProps
	& VariantProps
    & HoverColorProps
    & ActiveColorProps
	& VisitedColorProps
>`
	box-sizing: border-box;
	cursor: pointer;
	${variantsFunction('links')}
    ${styleFunctions}
    ${hoverColorStyleFunction}
    ${activeColorStyleFunction}
	${visitedColorStyleFunction}
`

Link.defaultProps = {
	variant: defaultVariantName,
	// color: 'link.color',
	// backgroundColor: 'link.backgroundColor',
	// hoverColor: 'link.hoverColor',
	// hoverBackgroundColor: 'link.hoverBackgroundColor',
	// hoverBorderColor: 'link.hoverBorderColor',
	// activeColor: 'link.activeColor',
	// activeBackgroundColor: 'link.activeBackgroundColor',
	// activeBorderColor: 'link.activeBorderColor',
	// visitedColor: 'link.visitedColor',
	// visitedBackgroundColor: 'link.visitedBackgroundColor',
	// visitedBorderColor: 'link.visitedBorderColor',
	// fontFamily: 'link.fontFamily',
	// fontSize: 'link.fontSize',
	// fontWeight: 'link.fontWeight',
}

Link.displayName = 'Link'

export { Link }
