import React from 'react'
import styled from 'styled-components'
import { styleFunctions } from './core'
import type { StyleProps } from './core'

const Text = styled.span<StyleProps>`
	box-sizing: border-box;
    ${styleFunctions}
`

Text.defaultProps = {
	color: 'text.color',
	backgroundColor: 'text.backgroundColor',
	fontFamily: 'text.fontFamily',
	fontSize: 'text.fontSize',
	fontWeight: 'text.fontWeight',
}

Text.displayName = 'Text'

export { Text }
