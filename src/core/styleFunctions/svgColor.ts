import { system } from 'styled-system'

export const svgColor = (props: any) => system({
	fill: {
		property: 'fill',
		scale: 'colors',
	},
	stroke: {
		property: 'stroke',
		scale: 'colors',
	},
})

export type SvgColorProps = {
    fill?: string
    stroke?: string
}
