import React from 'react'
import styled from 'styled-components'
import { flexbox } from 'styled-system'
import { Box } from './Box'
import type { FlexboxProps } from 'styled-system'

// TO DO: Add props to allow wrapping at specified breakpoints
// (breakpoints taken from theme scale).
const Flex = styled(Box)<FlexboxProps>`
    ${flexbox}
`

Flex.defaultProps = {
	display: 'flex',
}

Flex.displayName = 'Flex'

export { Flex }
