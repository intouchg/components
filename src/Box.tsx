import React from 'react'
import styled from 'styled-components'
import { flexbox, grid } from 'styled-system'
import { styleFunctions } from './core'
import type { StyleProps } from './core'
import type { FlexboxProps, GridProps } from 'styled-system'

const Box = styled.div<
    StyleProps
    & FlexboxProps
    & GridProps
>`
    box-sizing: border-box;
    ${styleFunctions}
    ${flexbox}
    ${grid}
`

Box.displayName = 'Box'

export { Box }
