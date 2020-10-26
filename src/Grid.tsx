import React from 'react'
import styled from 'styled-components'
import { system } from 'styled-system'
import { Box } from './index'

const Grid = styled(Box)<{ gridTemplate?: string }>`
    ${system({ gridTemplate: true })}
`

Grid.defaultProps = {
    display: 'grid',
}

Grid.displayName = 'Grid'

export { Grid }
