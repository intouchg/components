import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@intouchg/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps, SXProps } from './core'

const ListItem = styled.li<
    & StyleProps
    & VariantProps
    & SXProps
>`
    box-sizing: border-box;
    ${variantsFunction('listItems')}
    ${styleFunctions}
    ${sx}
`

ListItem.defaultProps = { variant: defaultVariantName }

;(ListItem as any).themeComponent = 'listItem'

ListItem.displayName = 'ListItem'

export { ListItem }
