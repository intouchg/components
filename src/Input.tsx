import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const Input = styled.input.attrs((props) => ({
	type: props.type || 'text',
}))<StyleProps & VariantProps>`
	box-sizing: border-box;
	padding: 0;
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	border-width: 1px;
	border-style: solid;
	${variantsFunction('inputs')}
	${styleFunctions}
	${sx}
`

Input.defaultProps = { variant: defaultVariantName }

;(Input as any).themeComponent = 'input'

Input.displayName = 'Input'

export { Input }
