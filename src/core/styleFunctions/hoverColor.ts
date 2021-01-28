import { css } from 'styled-components'
import { system } from 'styled-system'

export const hoverColor = (props: any) => css`
	&:hover {
		${system({
			hoverColor: {
				property: 'color',
				scale: 'colors',
			},
			hoverBackgroundColor: {
				property: 'backgroundColor',
				scale: 'colors',
			},
			hoverBorderColor: {
				property: 'borderColor',
				scale: 'colors',
			},
		})}
	}
`

export type HoverColorProps = {
    hoverColor?: string
    hoverBackgroundColor?: string
    hoverBorderColor?: string
}
