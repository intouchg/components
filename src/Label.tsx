import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@intouchg/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps, SXProps } from './core'

const Label = styled.label<
	& StyleProps
	& VariantProps
	& SXProps
>`
	box-sizing: border-box;
	cursor: pointer;
	${variantsFunction('labels')}
	${styleFunctions}
	${sx}
`

Label.defaultProps = { variant: defaultVariantName }

;(Label as any).themeComponent = 'label'

Label.displayName = 'Label'

export { Label }
