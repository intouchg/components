import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction } from './core'
import type { StyleProps, VariantProps } from './core'

const Heading = styled.h3<
	& StyleProps
	& VariantProps
>`
	box-sizing: border-box;
	${variantsFunction('headings')}
	${styleFunctions}
`

Heading.defaultProps = {
	variant: defaultVariantName,
	// color: 'heading.color',
	// backgroundColor: 'heading.backgroundColor',
	// fontFamily: 'heading.fontFamily',
	// fontSize: 'heading.fontSize',
	// fontWeight: 'heading.fontWeight',
}

Heading.displayName = 'Heading'

export { Heading }
