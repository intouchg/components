import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps, SXProps } from './core'

const List = styled.div<
    & StyleProps
    & VariantProps
    & SXProps
>`
    box-sizing: border-box;
    ${variantsFunction('lists')}
    ${styleFunctions}
    ${sx}
`

List.defaultProps = { variant: defaultVariantName }

;(List as any).themeComponent = 'list'

List.displayName = 'List'

export { List }
