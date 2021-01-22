import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, hoverColorStyleFunction, activeColorStyleFunction, visitedColorStyleFunction } from './core'
import type { StyleProps, VariantProps, HoverColorProps, ActiveColorProps, VisitedColorProps } from './core'

const Link = styled.a<
	& StyleProps
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

Link.defaultProps = { variant: defaultVariantName }

Link.displayName = 'Link'

export { Link }
