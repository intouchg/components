import React from 'react'
import styled from 'styled-components'
import { compose, space, layout, position, border, shadow } from 'styled-system'
import { createShouldForwardProp } from './core'
import type { ComponentProps } from 'react'
import type { LayoutProps, PositionProps, SpaceProps, BorderProps, ShadowProps } from 'styled-system'

const BaseImage = ({
	src,
	alt,
	aspectRatio,
	style,
	className,
	...props
}: {
    src: string
    alt: string
    aspectRatio?: number
} & ComponentProps<'img'>) => {
	if (!aspectRatio) {
		return (
			<img
				src={src}
				alt={alt}
				className={className}
				style={style}
				{...props}
			/>
		)
	}

	return (
		<div
			className={className}
			style={style}
		>
			<div style={{
				position: 'relative',
				overflow: 'hidden',
			}}>
				<div style={{
					width: '100%',
					height: 0,
					paddingBottom: `${100 / aspectRatio}%`,
				}}>
					<img
						src={src}
						alt={alt}
						style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                        }}
						{...props}
					/>
				</div>
			</div>
		</div>
	)
}

const imageStyleFunctions = compose(layout, position, space, border, shadow)

const shouldForwardProp = createShouldForwardProp([ 'aspectRatio' ])

const Image = styled(BaseImage).withConfig({ shouldForwardProp })<
    LayoutProps
    & PositionProps
    & SpaceProps
    & BorderProps
    & ShadowProps
>`
    box-sizing: border-box;
    ${imageStyleFunctions}
`

Image.displayName = 'Image'

export { Image }
