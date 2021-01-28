import { css } from 'styled-components'
import { system } from 'styled-system'

export const visitedColor = (props: any) => css`
	&:visited {
		${system({
			visitedColor: {
				property: 'color',
				scale: 'colors',
			},
			visitedBackgroundColor: {
				property: 'backgroundColor',
				scale: 'colors',
			},
			visitedBorderColor: {
				property: 'borderColor',
				scale: 'colors',
			},
		})}
	}
`

export type VisitedColorProps = {
    visitedColor?: string
    visitedBackgroundColor?: string
    visitedBorderColor?: string
}
