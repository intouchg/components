import React from 'react'
import styled from 'styled-components'
import { grid } from 'styled-system'
import { styleFunctions } from './core'
import type { StyleProps } from './core'
import type { GridProps } from 'styled-system'

const Stack = styled.div<
	& StyleProps
	& GridProps
>`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	${styleFunctions}
	${grid}
`

Stack.displayName = 'Stack'

export { Stack }
