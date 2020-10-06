import React from 'react'
import styled from 'styled-components'
import { styleFunctions, variantsFunction } from './core'
import type { StyleProps, VariantProps } from './core'

const Text = styled.span<StyleProps & VariantProps>`
	box-sizing: border-box;
	${styleFunctions}
	${variantsFunction('texts')}
`

Text.defaultProps = {
	variant: 'primary',
	// color: 'text.color',
	// backgroundColor: 'text.backgroundColor',
	// fontFamily: 'text.fontFamily',
	// fontSize: 'text.fontSize',
	// fontWeight: 'text.fontWeight',
}

Text.displayName = 'Text'

export { Text }
