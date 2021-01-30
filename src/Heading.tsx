import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const Heading = styled.h3<StyleProps & VariantProps>`
	box-sizing: border-box;
	${variantsFunction('headings')}
	${styleFunctions}
	${sx}
`

Heading.defaultProps = { variant: defaultVariantName }

;(Heading as any).themeComponent = 'heading'

Heading.displayName = 'Heading'

export { Heading }
