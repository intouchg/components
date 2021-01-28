import React from 'react'
import styled from 'styled-components'
import { defaultVariantName, componentVariantsPropertyMap } from '@i/theme'
import { styleFunctions, variantsFunction, svgColor } from './core'
import type { StyleProps, VariantProps, SvgColorProps } from './core'

const Icon = styled.svg<
	& StyleProps
	& SvgColorProps
	& VariantProps
>`
	box-sizing: border-box;
	${variantsFunction(componentVariantsPropertyMap.icon)}
	${styleFunctions}
	${svgColor}
`

Icon.defaultProps = { variant: defaultVariantName }

;(Icon as any).themeComponent = 'icon'

Icon.displayName = 'Icon'

export { Icon }
