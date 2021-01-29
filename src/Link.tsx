import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const Link = styled.a<StyleProps & VariantProps>`
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
