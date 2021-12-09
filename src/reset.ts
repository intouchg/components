import { outline } from './outline'

// Prior art https://github.com/andy-piccalilli/modern-css-reset
export const reset = `
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

	body {
		height: 100%;
		height: -moz-available;
		height: -webkit-fill-available;
		height: fill-available;
		text-rendering: optimizeLegibility;
	}

	[id] {
		scroll-margin-top: 2ex;
	}

	iframe {
		border: 0;
	}

	img,
	picture {
		max-width: 100%;
		display: block;
	}

	img[width][height] {
		height: auto;
	}

	ul {
		list-style: none;
	}

	a,
	button {
		text-decoration: none;
	}

	button,
	select {
		cursor: pointer;

		&:disabled {
			cursor: auto;
		}
	}

	button,
	select,
	input,
	textarea {
		border: 1px solid;
	}

	a,
	button,
	input,
	textarea,
	select,
	address {
		font: inherit;
		outline: none;

        &:focus-visible {
            ${outline}
        }
	}
`
