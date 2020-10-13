import React from 'react'
import styled from 'styled-components'
import { flexbox } from 'styled-system'
import { Box } from './index'
import type { FlexboxProps } from 'styled-system'

const Stack = styled(Box)<FlexboxProps>`
    ${flexbox}
`

Stack.defaultProps = {
	display: 'flex',
	flexDirection: 'column',
}

Stack.displayName = 'Stack'

export { Stack }
