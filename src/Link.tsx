import React from 'react'
import styled from 'styled-components'
import { defaultVariantName, componentVariantsPropertyMap } from '@i/theme'
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
	${variantsFunction(componentVariantsPropertyMap.link)}
	${styleFunctions}
	${hoverColorStyleFunction}
	${activeColorStyleFunction}
	${visitedColorStyleFunction}
`

Link.defaultProps = { variant: defaultVariantName }

Link.displayName = 'Link'

export { Link }
