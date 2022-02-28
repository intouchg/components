import { outline } from './outline'

export const inputContainer = `
	box-sizing: border-box;
	position: relative;
	display: inline-flex;
	width: 1rem;
	height: 1rem;

	input {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		margin: 0;
		opacity: 0;
	}

	span, svg {
		box-sizing: border-box;
	}

	span {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		margin: 0;
		border: 1px solid #767676;
		border-radius: 20%;
		pointer-events: none;
	}

	svg {
		width: 100%;
		padding: 10%;
		fill: #ffffff;
		opacity: 0;
	}

	input:disabled + span {
		background-color: #f8f8f8;
		border-color: #d1d1d1;
	}

	input:checked:not(:disabled) + span {
		background-color: #0277f6;
		border-color: #0277f6;
	}

	input:checked:disabled + span {
		background-color: #d1d1d1;
	}

	input:checked + span svg {
		opacity: 1;
	}

	input:focus-visible + span {
		${outline}
		outline-offset: 3px;
	}
`
