import { css } from 'styled-components'
import { system } from 'styled-system'

export const focusColor = (props: any) => css`
	&:focus {
		${system({
			focusColor: {
				property: 'color',
				scale: 'colors',
			},
			focusBackgroundColor: {
				property: 'backgroundColor',
				scale: 'colors',
			},
			focusBorderColor: {
				property: 'borderColor',
				scale: 'colors',
			},
		})}
	}
`

export type FocusColorProps = {
    focusColor?: string
    focusBackgroundColor?: string
    focusBorderColor?: string
}
