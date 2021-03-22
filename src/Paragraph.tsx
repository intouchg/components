import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps, SXProps } from './core'

const Paragraph = styled.p<
	& StyleProps
	& VariantProps
	& SXProps
>`
	box-sizing: border-box;
	${variantsFunction('paragraphs')}
	${styleFunctions}
	${sx}
`

Paragraph.defaultProps = { variant: defaultVariantName }

;(Paragraph as any).themeComponent = 'paragraph'

Paragraph.displayName = 'Paragraph'

export { Paragraph }
