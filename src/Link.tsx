import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@intouchg/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps, SXProps } from './core'

const Link = styled.a<
	& StyleProps
	& VariantProps
	& SXProps
>`
	box-sizing: border-box;
	cursor: pointer;
	${variantsFunction('links')}
	${styleFunctions}
	${sx}
`

Link.defaultProps = { variant: defaultVariantName }

;(Link as any).themeComponent = 'link'

Link.displayName = 'Link'

export { Link }
