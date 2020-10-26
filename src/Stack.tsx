import React from 'react'
import styled from 'styled-components'
import { Box } from './index'

const Stack = styled(Box)``

Stack.defaultProps = {
	display: 'flex',
	flexDirection: 'column',
}

Stack.displayName = 'Stack'

export { Stack }
