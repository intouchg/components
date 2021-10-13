import { createGlobalStyle, css } from 'styled-components'
import type {
	Interpolation,
	ThemedStyledProps,
	DefaultTheme,
} from 'styled-components'

const reset = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: auto;
	}
	img,
	picture {
		max-width: 100%;
		display: block;
	}
	a {
		text-decoration: none;
	}
	input,
	button,
	textarea,
	select {
		font: inherit;
	}
	button {
		color: inherit;
		text-decoration: none;
		border-style: none;
		outline: none;
		cursor: pointer;
		&:focus-visible {
			outline: 2px auto #005fd7;
			outline: 2px auto -webkit-focus-ring-color;
		}
		&:disabled {
			cursor: auto;
		}
	}
`

export const GlobalStyle = createGlobalStyle<{
	reset?: boolean
	style: Interpolation<ThemedStyledProps<any, DefaultTheme>>
}>`
    ${(props) => (props.reset === false ? '' : reset)}
    ${(props) => props.style}
`
