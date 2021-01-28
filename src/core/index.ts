import { variant, compose, space, layout, flexbox, position, color, background, border, shadow, typography } from 'styled-system'
import isHTMLProp from '@emotion/is-prop-valid'
import memoize from '@emotion/memoize'
import { props as defaultThemePropStrings } from '@styled-system/should-forward-prop'
import { customThemeProps, defaultVariantName, componentVariantsPropertyMap } from '@i/theme'
import { textTransform, textDecoration } from './styleFunctions'
import type { LayoutProps, FlexboxProps, PositionProps, SpaceProps, ColorProps, BackgroundProps, BorderProps, ShadowProps, TypographyProps } from 'styled-system'
import type { StyleProperty } from '@i/theme'
import type { TextTransformProps, TextDecorationProps } from './styleFunctions'

export * from './styleFunctions'

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
	textTransform,
	textDecoration,
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
