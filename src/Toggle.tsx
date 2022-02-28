import { forwardRef } from 'react'
import styled from 'styled-components'
import { Dot } from './Dot'
import { outline } from './outline'

const ToggleContainer = styled.div`
	box-sizing: border-box;
	position: relative;
	display: inline-flex;
	width: 2.75rem;
	height: 1.5rem;

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

	span,
	svg {
		box-sizing: border-box;
	}

	span {
		display: flex;
		width: 100%;
		height: 100%;
		margin: 0;
		border: 1px solid #767676;
		border-radius: 55% / 100%;
		pointer-events: none;
	}

	svg {
		width: 50%;
		fill: #0277f6;
		stroke: #0277f6;
		stroke-width: 18%;
		transition: transform 100ms ease-out;
		transform: translateX(0);
		overflow: visible;
	}

	input:checked + span {
		background-color: #0277f6;
		border-color: #0277f6;
	}

	input:checked + span svg {
		fill: #ffffff;
		stroke: #ffffff;
		transform: translateX(100%);
	}

	input:focus-visible + span {
		${outline}
		outline-offset: 3px;
	}
`

export const Toggle = forwardRef(
	(
		{
			className,
			icon = <Dot />,
			...props
		}: React.ComponentProps<'input'> & {
			icon?: React.ReactNode
		},
		ref: React.ForwardedRef<HTMLInputElement | null>
	) => (
		<ToggleContainer className={className}>
			<input {...props} type="checkbox" ref={ref} />
			<span aria-hidden="true">{icon}</span>
		</ToggleContainer>
	)
)

Toggle.displayName = 'Toggle'
