import React from 'react'
import styled from 'styled-components'
import { styleFunctions } from './core'
import type { StyleProps } from './core'

const Input = styled.input.attrs((props) => ({
	type: props.type || 'text',
}))<StyleProps>`
	box-sizing: border-box;
	font-size: inherit;
	line-height: inherit;
    border: 0;
    font-family: inherit;
    ${styleFunctions}
`

Input.defaultProps = {
	color: 'input.color',
	backgroundColor: 'input.backgroundColor',
	fontFamily: 'input.fontFamily',
	fontSize: 'input.fontSize',
	fontWeight: 'input.fontWeight',
}

Input.displayName = 'Input'

export { Input }
