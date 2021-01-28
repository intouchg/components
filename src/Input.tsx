import React from 'react'
import styled from 'styled-components'
import { defaultVariantName, componentVariantsPropertyMap } from '@i/theme'
import { styleFunctions, variantsFunction, hoverColor, focusColor } from './core'
import type { StyleProps, VariantProps, HoverColorProps, FocusColorProps } from './core'

const Input = styled.input.attrs((props) => ({
	type: props.type || 'text',
}))<
	& StyleProps
	& VariantProps
	& HoverColorProps
	& FocusColorProps
>`
	box-sizing: border-box;
	border-style: none;
	padding: 0;
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	${variantsFunction(componentVariantsPropertyMap.input)}
	${styleFunctions}
	${hoverColor}
	${focusColor}
`

Input.defaultProps = { variant: defaultVariantName }

;(Input as any).themeComponent = 'input'

Input.displayName = 'Input'

export { Input }
