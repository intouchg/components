import React from 'react'
import styled from 'styled-components'
import { grid } from 'styled-system'
import type { GridProps } from 'styled-system'
import { Box } from './index'

const Grid = styled(Box)<GridProps>`
    ${grid}
`

Grid.defaultProps = {}

Grid.displayName = 'Grid'

export { Grid }
