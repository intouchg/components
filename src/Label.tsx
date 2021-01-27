import React from 'react'
import styled from 'styled-components'
import { defaultVariantName, componentVariantsPropertyMap } from '@i/theme'
import { styleFunctions, variantsFunction } from './core'
import type { StyleProps, VariantProps } from './core'

const Label = styled.label<
	& StyleProps
	& VariantProps
>`
	box-sizing: border-box;
	cursor: pointer;
	${variantsFunction(componentVariantsPropertyMap.label)}
	${styleFunctions}
`

Label.defaultProps = { variant: defaultVariantName }

Label.displayName = 'Label'

export { Label }
