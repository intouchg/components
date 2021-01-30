import { system, variant, compose, space, layout, flexbox, grid, position, color, background, border, shadow, typography } from 'styled-system'
import isHTMLProp from '@emotion/is-prop-valid'
import memoize from '@emotion/memoize'
import { props as defaultThemePropStrings } from '@styled-system/should-forward-prop'
import { customThemeProps, defaultVariantName } from '@i/theme'
import type { LayoutProps, FlexboxProps, GridProps, PositionProps, SpaceProps, ColorProps, BackgroundProps, BorderProps, ShadowProps, TypographyProps } from 'styled-system'
import type { StyleProperty, componentVariantsPropertyMap } from '@i/theme'



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
	space,
	color,
	background,
	border,
	shadow,
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
