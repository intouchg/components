import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const Textarea = styled.textarea.attrs((props) => ({
	rows: props.rows || 4,
}))<
	& StyleProps
	& VariantProps
	& { resize?: string }
>`
	box-sizing: border-box;
	resize: ${(props) => props.resize || 'none'};
	padding: 0.25em;
	font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
	border-width: 1px;
	border-style: solid;
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
