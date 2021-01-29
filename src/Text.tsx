import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const Text = styled.span<StyleProps & VariantProps>`
	box-sizing: border-box;
	${variantsFunction('texts')}
	${styleFunctions}
	${sx}
`

Text.defaultProps = { variant: defaultVariantName }

;(Text as any).themeComponent = 'text'

Text.displayName = 'Text'

export { Text }
