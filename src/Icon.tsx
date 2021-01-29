import React from 'react'
import styled from 'styled-components'
import { defaultVariantName, componentVariantsPropertyMap } from '@i/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const Icon = styled.svg<StyleProps & VariantProps>`
	box-sizing: border-box;
	${variantsFunction(componentVariantsPropertyMap.icon)}
	${styleFunctions}
	${sx}
`

Icon.defaultProps = { variant: defaultVariantName }

;(Icon as any).themeComponent = 'icon'

Icon.displayName = 'Icon'

export { Icon }
