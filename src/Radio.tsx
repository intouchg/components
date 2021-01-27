import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { styleFunctions } from './core'
import type { StyleProps } from './core'

const RadioContainer = styled.span<StyleProps>`
    box-sizing: border-box;
    position: relative;
    display: inline-flex;
    width: 1em;
    height: 1em;
    border-radius: 100%;
    border-style: solid;
    border-color: currentColor;
    ${styleFunctions}

    input {
        position: absolute;
        margin: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }

    span {
        opacity: 0;
    }

    span svg {
        position: absolute;
    }

    input:checked + span {
        opacity: 1;
    }
`

const Radio = forwardRef((
    {
        id,
        name,
        value,
        icon,
        ...props
    }: React.ComponentProps<typeof RadioContainer> & {
        id?: string
        name: string
        value?: string
        icon: React.ReactNode
    },
    ref,
) => (
    <RadioContainer
        ref={ref}
        {...props}
    >
		<input
			type="radio"
			id={id}
			name={name}
			value={value}
		/>
		<span aria-hidden="true">
			{icon}
		</span>
	</RadioContainer>
))

Radio.displayName = 'Radio'

export { Radio }
