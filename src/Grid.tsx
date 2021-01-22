import React from 'react'
import styled from 'styled-components'
import { system, grid } from 'styled-system'
import { styleFunctions } from './core'
import type { StyleProps } from './core'
import type { GridProps } from 'styled-system'

const Grid = styled.div<
	& StyleProps
	& GridProps
	& { gridTemplate?: string }
>`
	box-sizing: border-box;
	display: grid;
	${styleFunctions}
	${grid}
	${system({ gridTemplate: true })}
`

Grid.displayName = 'Grid'

export { Grid }
