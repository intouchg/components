import React from 'react'
import styled from 'styled-components'
import { grid } from 'styled-system'
import { styleFunctions } from './core'
import type { StyleProps } from './core'
import type { GridProps } from 'styled-system'

// TO DO: Add props to allow wrapping at specified breakpoints
// (breakpoints taken from theme scale).
const Flex = styled.div<
	& StyleProps
	& GridProps
>`
	box-sizing: border-box;
	display: flex;
	${styleFunctions}
	${grid}
`

Flex.displayName = 'Flex'

export { Flex }
