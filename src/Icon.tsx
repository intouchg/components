import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const Icon = styled.svg<StyleProps & VariantProps>`
	box-sizing: border-box;
	color: inherit;
	fill: inherit;
	stroke: inherit;
	${variantsFunction('icons')}
	${styleFunctions}
	${sx}
`

Icon.defaultProps = { variant: defaultVariantName }

;(Icon as any).themeComponent = 'icon'

Icon.displayName = 'Icon'

export { Icon }
