import React from 'react'
import styled from 'styled-components'
import { styleFunctions, sx } from './core'
import type { StyleProps, SXProps } from './core'

const Stack = styled.div<
    & StyleProps
    & SXProps
>`
    box-sizing: border-box;
	display: flex;
	flex-direction: column;
    ${styleFunctions}
    ${sx}
`

Stack.displayName = 'Stack'

export { Stack }
