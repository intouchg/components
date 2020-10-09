import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { system } from 'styled-system'
import { styleFunctions, variantsFunction } from './core'
import type { StyleProps, VariantProps } from './core'

const Icon = styled.svg<StyleProps
	& VariantProps
	& { fill?: string }
>`
	box-sizing: border-box;
	${styleFunctions}
	${system({
		fill: {
			property: 'fill',
			scale: 'colors',
		},
	})}
	${variantsFunction('icons')}
`

Icon.defaultProps = {
	variant: defaultVariantName,
	// fill: 'icon.fill',
	// backgroundColor: 'icon.backgroundColor',
}

Icon.displayName = 'Icon'

export { Icon }
