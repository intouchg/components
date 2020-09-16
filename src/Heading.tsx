import React from 'react'
import styled from 'styled-components'
import { styleFunctions } from './core'
import type { StyleProps } from './core'

const Heading = styled.h3<StyleProps>`
    ${styleFunctions}
`

Heading.defaultProps = {
	color: 'heading.color',
	backgroundColor: 'heading.backgroundColor',
	fontFamily: 'heading.fontFamily',
	fontSize: 'heading.fontSize',
	fontWeight: 'heading.fontWeight',
}

Heading.displayName = 'Heading'

export { Heading }
