import React from 'react'
import styled from 'styled-components'
import { flexbox } from 'styled-system'
import type { FlexboxProps } from 'styled-system'
import { Box } from './index'

const Stack = styled(Box)<FlexboxProps>`
    ${flexbox}
`

Stack.defaultProps = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-evenly',
}

Stack.displayName = 'Stack'

export { Stack }
