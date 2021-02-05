import React from 'react'
import styled from 'styled-components'
import { styleFunctions, sx } from './core'
import type { StyleProps, SXProps } from './core'

// TO DO: Add props to allow wrapping at specified breakpoints
// (breakpoints taken from theme scale).
const Flex = styled.div<
    & StyleProps
    & SXProps
>`
    box-sizing: border-box;
	display: flex;
    ${styleFunctions}
    ${sx}
`

Flex.displayName = 'Flex'

export { Flex }
