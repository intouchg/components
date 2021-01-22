import React, { useRef } from 'react'
import styled from 'styled-components'
import { styleFunctions } from './core'
import type { StyleProps } from './core'

const CheckboxContainer = styled.div<{ disabled?: boolean }>`
    display: inline-block;
    vertical-align: middle;
    cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

const BaseCheckbox = ({
	id,
	className,
    checked,
    disabled,
	onClick = () => {},
	children,
}: {
    id?: string
    className?: string
    checked: boolean
    disabled?: boolean
    onClick?: (checked: boolean) => void
    children: React.ReactNode
}) => {
    const wasClicked = useRef(false)

	const handleClick = () => {
		wasClicked.current = true
		onClick(!checked)
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (wasClicked.current) {
			wasClicked.current = false
			return
		}

		onClick(event.target.checked)
	}

    return (
        <CheckboxContainer
            className={className}
            disabled={disabled}
            onClick={!disabled ? handleClick : undefined}
        >
            <HiddenCheckbox
                id={id}
                checked={checked}
                disabled={disabled}
                onChange={handleChange}
            />
            {children}
        </CheckboxContainer>
    )
}

const Checkbox = styled(BaseCheckbox)<StyleProps>`
    box-sizing: border-box;
    ${styleFunctions}
`

Checkbox.displayName = 'Checkbox'

export { Checkbox }
