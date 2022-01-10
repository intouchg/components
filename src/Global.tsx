import { createGlobalStyle } from 'styled-components'
import { reset } from './reset'
import type {
	Interpolation,
	ThemedStyledProps,
	DefaultTheme,
} from 'styled-components'

export const Global = createGlobalStyle<{
	reset?: boolean
	style?: Interpolation<ThemedStyledProps<any, DefaultTheme>>
}>`
    ${(props) => props.reset && reset}
    ${(props) => props.style}
`
