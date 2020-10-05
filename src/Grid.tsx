import React from 'react'
import styled from 'styled-components'
import { Box } from './index'

const Grid = styled(Box)<{
    gridTemplate: string
}>`
    display: grid;
    ${(props) => !props.gridTemplate ? ''
        : `grid-template: ${props.gridTemplate};`
    }
`

Grid.defaultProps = {}

Grid.displayName = 'Grid'

export { Grid }
