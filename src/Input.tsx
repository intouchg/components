import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@intouchg/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps, SXProps } from './core'

const Input = styled.input.attrs((props) => ({
	type: props.type || 'text',
}))<
	& StyleProps
	& VariantProps
	& SXProps
>`
	box-sizing: border-box;
	padding: 0 0.25em;
	font: inherit;
	color: inherit;
	border: 1px solid;
	${variantsFunction('inputs')}
	${styleFunctions}
	${sx}
`

Input.defaultProps = { variant: defaultVariantName }

;(Input as any).themeComponent = 'input'

Input.displayName = 'Input'

export { Input }
