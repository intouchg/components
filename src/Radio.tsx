import { forwardRef } from 'react'
import styled from 'styled-components'
import { Dot } from './Dot'
import { inputContainer } from './inputStyles'

const RadioContainer = styled.div`
	${inputContainer}

	span {
		border-radius: 100%;
	}
`

export const Radio = forwardRef(
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
		<RadioContainer className={className}>
			<input {...props} type="radio" ref={ref} />
			<span aria-hidden="true">{icon}</span>
		</RadioContainer>
	)
)

Radio.displayName = 'Radio'
