import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, svgColorStyleFunction } from './core'
import type { StyleProps, VariantProps, SvgColorProps } from './core'

const Icon = styled.svg<
	& StyleProps
	& SvgColorProps
	& VariantProps
>`
	box-sizing: border-box;
	${variantsFunction('icons')}
	${styleFunctions}
	${svgColorStyleFunction}
`

Icon.defaultProps = { variant: defaultVariantName }

Icon.displayName = 'Icon'

export { Icon }
