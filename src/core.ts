import { system, compose, space, layout, position, color, background, border, shadow, typography } from 'styled-system'
import isHTMLProp from '@emotion/is-prop-valid'
import memoize from '@emotion/memoize'
import { css } from 'styled-components'
import { props as defaultThemePropStrings } from '@styled-system/should-forward-prop'
import { customThemeProps } from '@i/theme'
import type { LayoutProps, PositionProps, SpaceProps, ColorProps, BackgroundProps, BorderProps, ShadowProps, TypographyProps } from 'styled-system'

export const callAll = (...fns: Function[]) => (...args: any[]) => fns.forEach(fn => fn && fn(...args))

const customThemePropStrings: string[] = []

for (const key of Object.keys(customThemeProps)) {
	customThemePropStrings.push(...(customThemeProps as any)[key])
}

const themePropStrings = defaultThemePropStrings.concat(customThemePropStrings)

export const createShouldForwardProp = (propStringsToPass: string[]) =>
    memoize((prop) => !themePropStrings.includes(prop) && (isHTMLProp(prop) || propStringsToPass.includes(prop))) as any

export const styleFunctions = compose(layout, position, space, color, background, border, shadow, typography)

export type StyleProps = LayoutProps
    & PositionProps
    & SpaceProps
    & ColorProps
    & BackgroundProps
    & BorderProps
    & ShadowProps
	& TypographyProps
	
export type VariantProps = { variant?: string }

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
	&:hover {
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
