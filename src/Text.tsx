import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction } from './core'
import type { StyleProps, VariantProps } from './core'

const Text = styled.span<StyleProps & VariantProps>`
	box-sizing: border-box;
	${variantsFunction('texts')}
	${styleFunctions}
`

Text.defaultProps = {
	variant: defaultVariantName,
	// color: 'text.color',
	// backgroundColor: 'text.backgroundColor',
	// fontFamily: 'text.fontFamily',
	// fontSize: 'text.fontSize',
	// fontWeight: 'text.fontWeight',
}

Text.displayName = 'Text'

export { Text }
