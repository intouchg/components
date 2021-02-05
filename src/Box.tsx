import React from 'react'
import styled from 'styled-components'
import { styleFunctions, sx } from './core'
import type { StyleProps, SXProps } from './core'

const Box = styled.div<
    & StyleProps
    & SXProps
>`
    box-sizing: border-box;
    ${styleFunctions}
    ${sx}
`

Box.displayName = 'Box'

export { Box }
