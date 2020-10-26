import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, hoverColorStyleFunction, focusColorStyleFunction } from './core'
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
	font-size: inherit;
	line-height: inherit;
    border: 0;
	font-family: inherit;
	${variantsFunction('inputs')}
	${styleFunctions}
	${hoverColorStyleFunction}
	${focusColorStyleFunction}
`

Input.defaultProps = {
	variant: defaultVariantName,
	// color: 'input.color',
	// backgroundColor: 'input.backgroundColor',
	// fontFamily: 'input.fontFamily',
	// fontSize: 'input.fontSize',
	// fontWeight: 'input.fontWeight',
}

Input.displayName = 'Input'

export { Input }
