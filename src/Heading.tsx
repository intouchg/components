import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@intouchg/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps, SXProps } from './core'

const Heading = styled.h3<
	& StyleProps
	& VariantProps
	& SXProps
>`
	box-sizing: border-box;
	${variantsFunction('headings')}
	${styleFunctions}
	${sx}
`

Heading.defaultProps = { variant: defaultVariantName }

;(Heading as any).themeComponent = 'heading'

Heading.displayName = 'Heading'

export { Heading }
