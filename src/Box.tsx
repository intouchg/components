import React from 'react'
import styled from 'styled-components'
import { system, grid } from 'styled-system'
import { styleFunctions } from './core'
import type { StyleProps } from './core'
import type { GridProps, FlexGrowProps, FlexShrinkProps } from 'styled-system'

const Box = styled.div<
    StyleProps
    & GridProps
    & FlexGrowProps
    & FlexShrinkProps
>`
    box-sizing: border-box;
    ${styleFunctions}
    ${grid}
    ${system({
        flexGrow: true,
        flexShrink: true,
    })}
`

Box.displayName = 'Box'

export { Box }
