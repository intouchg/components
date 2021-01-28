import { css } from 'styled-components'
import { system } from 'styled-system'

export const activeColor = (props: any) => css`
	&:active {
		${system({
			activeColor: {
				property: 'color',
				scale: 'colors',
			},
			activeBackgroundColor: {
				property: 'backgroundColor',
				scale: 'colors',
			},
			activeBorderColor: {
				property: 'borderColor',
				scale: 'colors',
			},
		})}
	}
`

export type ActiveColorProps = {
    activeColor?: string
    activeBackgroundColor?: string
    activeBorderColor?: string
}
