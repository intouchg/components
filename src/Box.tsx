import React from 'react'
import styled from 'styled-components'
import { styleFunctions, sx } from './core'
import type { StyleProps } from './core'

const Box = styled.div<StyleProps>`
    box-sizing: border-box;
    ${styleFunctions}
    ${sx}
`

Box.displayName = 'Box'

export { Box }
