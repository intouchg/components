import React from 'react'
import styled from 'styled-components'
import { system } from 'styled-system'
import { styleFunctions } from './core'
import type { StyleProps } from './core'

const Icon = styled.svg<StyleProps & { fill?: string }>`
	box-sizing: border-box;
	${styleFunctions}
	${system({
		fill: {
			property: 'fill',
			scale: 'colors',
		},
	})}
`

Icon.defaultProps = {
	fill: 'icon.fill',
	backgroundColor: 'icon.backgroundColor',
}

Icon.displayName = 'Icon'

export { Icon }
