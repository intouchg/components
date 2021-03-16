import React from 'react'
import styled from 'styled-components'
import { styleFunctions } from './core'
import type { StyleProps, SXProps } from './core'

const Grid = styled.div<
	& StyleProps
	& SXProps
>`
	box-sizing: border-box;
	display: grid;
	${styleFunctions}
`

Grid.displayName = 'Grid'

export { Grid }
