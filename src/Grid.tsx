import React from 'react'
import styled from 'styled-components'
import { system } from 'styled-system'
import { styleFunctions } from './core'
import type { StyleProps } from './core'

const Grid = styled.div<StyleProps & { gridTemplate?: string }>`
	box-sizing: border-box;
	display: grid;
	${styleFunctions}
	${system({ gridTemplate: true })}
`

Grid.displayName = 'Grid'

export { Grid }
