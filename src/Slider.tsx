import React from 'react'
import styled from 'styled-components'
import { defaultVariantName } from '@i/theme'
import { styleFunctions, variantsFunction, sx } from './core'
import type { StyleProps, VariantProps } from './core'

const Slider = styled.input.attrs({ type: 'range' })<
    & StyleProps
    & VariantProps
    & { unfilled?: boolean }
>`
    box-sizing: border-box;
    appearance: ${(props) => props.unfilled ? 'none' : 'auto'};
    width: 100%;
    height: 4px;
    background-color: #efefef;
    border: 1px solid #b2b2b2;
    border-radius: 9999px;
    outline: none;
    cursor: pointer;

    &:focus-visible {
        outline: 2px auto #005FD7;
        outline: 2px auto -webkit-focus-ring-color;
    }

    ${variantsFunction('sliders')}
    ${styleFunctions}
    ${sx}
`

Slider.defaultProps = { variant: defaultVariantName }

;(Slider as any).themeComponent = 'slider'

Slider.displayName = 'Slider'

export { Slider }
