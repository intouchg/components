import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction } from './core'
import type { StyleProps, VariantProps } from './core'

const Text = styled.span<
	& StyleProps
	& VariantProps
>`
	box-sizing: border-box;
	${variantsFunction('texts')}
	${styleFunctions}
`

Text.defaultProps = { variant: defaultVariantName }

Text.displayName = 'Text'

export { Text }
