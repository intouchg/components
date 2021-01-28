import { system } from 'styled-system'

export const textTransform = system({ textTransform: true })

export type TextTransformProps = {
	textTransform?:
		| 'none'
		| 'capitalize'
		| 'uppercase'
		| 'lowercase'
		| 'unset'
		| 'initial'
		| 'inherit'
}
