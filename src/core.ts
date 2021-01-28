import { system, compose, variant, space, layout, flexbox, position, color, background, border, shadow, typography } from 'styled-system'
import isHTMLProp from '@emotion/is-prop-valid'
import memoize from '@emotion/memoize'
import { css } from 'styled-components'
import { props as defaultThemePropStrings } from '@styled-system/should-forward-prop'
import { customThemeProps, defaultVariantName, componentVariantsPropertyMap } from '@i/theme'
import type { LayoutProps, FlexboxProps, PositionProps, SpaceProps, ColorProps, BackgroundProps, BorderProps, ShadowProps, TypographyProps } from 'styled-system'
import type { themeSpec, StyleProperty } from '@i/theme'

export const callAll = (...fns: Function[]) => (...args: any[]) => fns.forEach(fn => fn && fn(...args))

const customThemePropStrings: string[] = []

for (const key of Object.keys(customThemeProps)) {
	customThemePropStrings.push(...(customThemeProps as any)[key])
}

const themePropStrings = defaultThemePropStrings.concat(customThemePropStrings)

export const createShouldForwardProp = (propStringsToPass: string[]) =>
    memoize((prop) => !themePropStrings.includes(prop) && (isHTMLProp(prop) || propStringsToPass.includes(prop))) as any

export const filterThemeProps = <T extends { [key in StyleProperty]: any }>(props: T, propNames: Readonly<string[]>) => {
	const filteredProps = {} as T
	const keys = Object.keys(props) as StyleProperty[]
	const keysLength = keys.length

	for (let i = 0; i < keysLength; i++) {
		const key = keys[i]

		if (propNames.includes(key)) {
			filteredProps[key] = props[key]
		}
	}

	return filteredProps
}

export const variantsFunction = (themePropName: typeof componentVariantsPropertyMap[keyof typeof componentVariantsPropertyMap]) => variant({ scale: themePropName, variants: { [defaultVariantName]: {} } })

export type VariantProps = { variant?: string }

export const textTransformStyleFunction = system({ textTransform: true })

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

export const textDecorationStyleFunction = system({ textDecoration: true })

export type TextDecorationProps = { textDecoration?: string }


export const styleFunctions = compose(
	layout,
	flexbox,
	position,
	space,
	color,
	background,
	border,
	shadow,
	typography,
	textTransformStyleFunction,
	textDecorationStyleFunction,
)

export type StyleProps =
	& LayoutProps
	& FlexboxProps
    & PositionProps
    & SpaceProps
    & ColorProps
    & BackgroundProps
    & BorderProps
    & ShadowProps
	& TypographyProps
	& TextTransformProps
	& TextDecorationProps

export const svgColorStyleFunction = (props: any) => system({
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

export const hoverColorStyleFunction = (props: any) => css`
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

export const activeColorStyleFunction = (props: any) => css`
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

export const visitedColorStyleFunction = (props: any) => css`
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

export const focusColorStyleFunction = (props: any) => css`
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

