import { system, variant, compose, space as spaceFn, layout, flexbox, grid, position, color as colorFn, background, border, shadow as shadowFn, typography } from 'styled-system'
import isHTMLProp from '@emotion/is-prop-valid'
import memoize from '@emotion/memoize'
import { props as defaultThemePropStrings } from '@styled-system/should-forward-prop'
import { customThemeProps, defaultVariantName } from '@i/theme'
import type { LayoutProps, FlexboxProps, GridProps, PositionProps, SpaceProps, ColorProps, BackgroundProps, BorderProps, ShadowProps, TypographyProps } from 'styled-system'
import type { StyleProperty, componentVariantsPropertyMap } from '@i/theme'
import type {} from 'styled-components/cssprop'


export const variantsFunction = (themePropName: typeof componentVariantsPropertyMap[keyof typeof componentVariantsPropertyMap]) => variant({ scale: themePropName, variants: { [defaultVariantName]: {} } })

export type VariantProps = { variant?: string }



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

    for (const key in props) {
        if (propNames.includes(key)) {
            filteredProps[key] = props[key]
        }
    }

    return filteredProps
}



export const customStyleFunction = system({
    // Grid
    gridTemplate: true,

    // Animation
    transform: true,
    transition: true,

    // SVG
    fill: {
        property: 'fill',
        scale: 'colors',
    },
	stroke: {
        property: 'stroke',
        scale: 'colors',
    },
    strokeWidth: true,

    // Text
    textDecoration: true,
    textTransform: true,
})

export type CustomStyleProps = {
    // Grid
    gridTemplate?: string

    // Animation
    transform?: string
    transition?: string

    // SVG
    fill?: string
    stroke?: string
    strokeWidth?: string

    // Text
    textDecoration?: string
    textTransform?:
		| 'none'
		| 'capitalize'
		| 'uppercase'
		| 'lowercase'
		| 'unset'
		| 'initial'
        | 'inherit'

}



export const styleFunctions = compose(
	layout,
    flexbox,
    grid,
	position,
	spaceFn,
	colorFn,
	background,
	border,
	shadowFn,
	typography,
	customStyleFunction,
)

export type StyleProps =
	& LayoutProps
    & FlexboxProps
    & GridProps
    & PositionProps
    & SpaceProps
    & ColorProps
    & BackgroundProps
    & BorderProps
    & ShadowProps
	& TypographyProps
	& CustomStyleProps



export const sx = (props: any) => {
    if (!props || !props.sx) return
    const styles = {} as any

    for (const key in props.sx) {
        styles[key] = styleFunctions({ ...props.sx[key], theme: props.theme })
    }

    return styles
}

export type SXProps = {
    sx?: {
        [selector: string]: {
            [styleProperty: string]: any
        }
    }
}


export const media = (index: number) => (props: any) => `@media only screen and (min-width: ${props.theme.breakpoints[index]})`
export const breakpoint = (index: number) => (props: any) => props.theme.breakpoints[index]
export const space = (index: number) => (props: any) => props.theme.space[index]
export const size = (index: number) => (props: any) => props.theme.sizes[index]
export const color = (name: string) => (props: any) => props.theme.colors[name]
export const font = (name: string) => (props: any) => props.theme.fonts[name]
export const fontSize = (index: number) => (props: any) => props.theme.fontSizes[index]
export const fontWeight = (index: number) => (props: any) => props.theme.fontWeights[index]
export const lineHeight = (index: number) => (props: any) => props.theme.lineHeights[index]
export const letterSpacing = (index: number) => (props: any) => props.theme.letterSpacings[index]
export const borderWidth = (index: number) => (props: any) => props.theme.borderWidths[index]
export const radius = (index: number) => (props: any) => props.theme.radii[index]
export const shadow = (name: string) => (props: any) => props.theme.shadows[name]
export const zIndex = (index: number) => (props: any) => props.theme.zIndices[index]