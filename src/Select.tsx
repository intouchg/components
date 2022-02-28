import { forwardRef } from 'react'
import styled from 'styled-components'
import { Chevron } from './Chevron'

const SelectContainer = styled.div`
	box-sizing: border-box;
	position: relative;
	width: 100%;

	select {
		appearance: none;
		width: 100%;
		margin: 0;
		border: 1px solid #000000;
		outline-offset: 3px;
	}

	span {
		pointer-events: none;
	}

	select,
	span {
		box-sizing: border-box;
		padding: 0.25rem;
	}

	span {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		top: 0;
		bottom: 0;
		right: 0;
		width: 1.25rem;
	}

	svg {
		width: 100%;
	}

	select:disabled {
		opacity: 1;
		color: #a6a6a6;
		background-color: #f8f8f8;
		border-color: #d1d1d1;
	}

	select:disabled + span svg {
		fill: #a6a6a6;
	}
`

export const Select = forwardRef(
	(
		{
			className,
			icon = <Chevron />,
			...props
		}: React.ComponentProps<'select'> & {
			icon?: React.ReactNode
		},
		ref: React.ForwardedRef<HTMLSelectElement | null>
	) => (
		<SelectContainer className={className}>
			<select {...props} ref={ref} />
			<span aria-hidden="true">{icon}</span>
		</SelectContainer>
	)
)

Select.displayName = 'Select'
