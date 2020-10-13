import React from 'react'
import styled from 'styled-components'
import { Box } from './index'

// TO DO: Add props to allow wrapping at specified breakpoints
// (breakpoints taken from theme scale).
const Flex = styled(Box)``

Flex.defaultProps = {
	display: 'flex',
}

Flex.displayName = 'Flex'

export { Flex }
