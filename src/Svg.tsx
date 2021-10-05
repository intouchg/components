import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@intouchg/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps, SXProps } from './core'

const Svg = styled.svg<
	& StyleProps
	& VariantProps
	& SXProps
>`
	box-sizing: border-box;
	${variantsFunction('icons')}
	${styleFunctions}
	${sx}
`

Svg.defaultProps = { variant: defaultVariantName }

;(Svg as any).themeComponent = 'icon'

Svg.displayName = 'Svg'

export { Svg }
