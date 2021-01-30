import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const Textarea = styled.textarea<StyleProps & VariantProps>`
	box-sizing: border-box;
	${variantsFunction('textareas')}
	${styleFunctions}
	${sx}
`

Textarea.defaultProps = { variant: defaultVariantName }

;(Textarea as any).themeComponent = 'textarea'

Textarea.displayName = 'Textarea'

export { Textarea }
