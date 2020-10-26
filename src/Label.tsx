import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction } from './core'
import type { StyleProps, VariantProps } from './core'

const Label = styled.label<
	& StyleProps
	& VariantProps
>`
	box-sizing: border-box;
	cursor: pointer;
	${variantsFunction('labels')}
	${styleFunctions}
`

Label.defaultProps = {
	variant: defaultVariantName,
	// color: 'label.color',
	// backgroundColor: 'label.backgroundColor',
	// fontFamily: 'label.fontFamily',
	// fontSize: 'label.fontSize',
	// fontWeight: 'label.fontWeight',
}

Label.displayName = 'Label'

export { Label }
