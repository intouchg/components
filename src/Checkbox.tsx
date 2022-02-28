import { forwardRef } from 'react'
import styled from 'styled-components'
import { Checkmark } from './Checkmark'
import { inputContainer } from './inputStyles'

const CheckboxContainer = styled.div`
	${inputContainer}
`

export const Checkbox = forwardRef(
	(
		{
			className,
			icon = <Checkmark />,
			...props
		}: React.ComponentProps<'input'> & {
			icon?: React.ReactNode
		},
		ref: React.ForwardedRef<HTMLInputElement | null>
	) => (
		<CheckboxContainer className={className}>
			<input {...props} type="checkbox" ref={ref} />
			<span aria-hidden="true">{icon}</span>
		</CheckboxContainer>
	)
)

Checkbox.displayName = 'Checkbox'
