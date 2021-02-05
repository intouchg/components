import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps, SXProps } from './core'

const Textarea = styled.textarea.attrs((props) => ({
	rows: props.rows || 4,
}))<
	& StyleProps
	& VariantProps
	& SXProps
	& { resize?: string }
>`
	box-sizing: border-box;
	resize: ${(props) => props.resize || 'none'};
	padding: 0.25em;
	font: inherit;
    color: inherit;
	border: 1px solid;
	border-radius: 2px;
	outline: none;

	&:focus-visible {
		outline: 2px auto #005FD7;
        outline: 2px auto -webkit-focus-ring-color;
	}

	${variantsFunction('textareas')}
	${styleFunctions}
	${sx}
`

Textarea.defaultProps = { variant: defaultVariantName }

;(Textarea as any).themeComponent = 'textarea'

Textarea.displayName = 'Textarea'

export { Textarea }
