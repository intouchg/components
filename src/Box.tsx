import React from 'react'
import styled from 'styled-components'
import { grid } from 'styled-system'
import { styleFunctions } from './core'
import type { StyleProps } from './core'
import type { GridProps } from 'styled-system'

const Box = styled.div<StyleProps & GridProps>`
    box-sizing: border-box;
    ${styleFunctions}
    ${grid}
`

Box.displayName = 'Box'

export { Box }
