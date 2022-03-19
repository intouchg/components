# @intouchg/components

React component library for the [Intouch Design System](https://ids.intouchg.co/)
<br>

## Installation

```bash
yarn add @intouchg/components styled-components
```

**[`babel-plugin-styled-components`](https://github.com/styled-components/babel-plugin-styled-components) is also required to use the [`css` prop](https://styled-components.com/docs/api#css-prop) (strongly recommended)**

## Basic Components

### Form

-   `Checkbox` - controlled or uncontrolled, native accessibility
-   `Radio` - controlled or uncontrolled, native accessibility
-   `Select` - controlled or uncontrolled, native accessibility
-   `Toggle` - controlled or uncontrolled, native accessibility

### Styles

-   `Global` - has two props, `reset` for applying the CSS reset, and `style` which wraps [`createGlobalStyle`](https://styled-components.com/docs/api#createglobalstyle)
-   `Apply` - use the `css` prop to apply the generated classname to all children (non-recursive) without a wrapping element. Useful for tiling by applying margins on arbitrary components.

## Trigger

-   `<Trigger />` - a [`SubStateProvider`](https://github.com/codynova/substate) with an api for tracking a hashmap of binary states. Useful for tabs, accordions, carousels, etc.

    -   `defaultActiveIds` - array of ids
    -   `allowMultiActive` - allow multiple active ids, default `true`
    -   `allowNoneActive` - allow zero active ids, default `true`
    -   `children` - standard React children

-   `const trigger = useTrigger(id)` - wires a component up to the `<Trigger />` context provider

    -   `id` - string, number, or undefined (a substate key)

```tsx
type TriggerProps = {
	id?: string | number
	active: boolean
	setActive: React.Dispatch<React.SetStateAction<boolean>>
	toggleActive: React.DispatchWithoutAction
	getActiveIds: () => (string | number)[]
	setActiveIds: (ids: (string | number)[]) => void
	setActiveById: (id: string | number, active: boolean) => void
	toggleById: (id: string | number) => void
	getIds: () => (string | number)[]
}

const Child = ({ triggerId }) => {
	const {
		id, // the id of this trigger
		active, // if this id is active
		setActive, // set this id's active state
		toggleActive, // toggle this id's active state
		getActiveIds, // get all active ids
		setActiveIds, // set all active ids
		setActiveById, // set some id's active state
		toggleById, // toggle some id's active state
		getIds, // get all ids regardless of active state
	} = useTrigger(triggerId)
	return (
		<div>
			<span
				style={{ color: active ? 'green' : 'red' }}
			>
				Active: {active}
			</span>
			<button onClick={tggleActive}>
				Toggle {id} active
			</button>
		</div>
	)
}

const Parent = () => (
	<Trigger
		defaultActiveIds={[ '1' ]}
		allowMultiActive={false}
		allowNonActive={false}
	>
		<Child triggerId="1" />
		<Child triggerId="2" />
	</Triggers>
)
```

## Helpers

-   [`media`](https://github.com/codynova/components/blob/master/src/media.ts) - media query object for responsive styles

-   [`reset`](https://github.com/codynova/components/blob/master/src/reset.ts) - CSS reset styles (used by `<Global reset />`)

-   [`outline`](https://github.com/codynova/components/blob/master/src/outline.ts) - element outline styles for accessibility (used in `reset`)

-   [`styled`](https://github.com/codynova/components/blob/master/src/styled.ts) - re-exports [`styled`](https://styled-components.com/docs/api#styled)

-   [`css`](https://github.com/codynova/components/blob/master/src/css.ts) - re-exports [`css`](https://styled-components.com/docs/api#css)

## Motivation

Foregoing a theming library like `styled-system` saves on both runtime performance and bundle size. Relying on [the `css` prop](https://styled-components.com/docs/api#css-prop) provided by `babel-plugin-styled-components` gives us the best of all worlds:

-   Colocate CSS styles inline with components
-   Easily extend and customize existing components
-   Props and theme access
-   Supports all CSS instead of a subset
-   Better runtime performance than style props
-   Smaller bundle size (realistically ~5kb smaller)

CSS custom properties can be used for theming instead of a JavaScript object, which will prevent the need to access the theme via props. Accessing the
theme via props is still supported of course.

## Usage

You should prefer to create new custom elements using the `css` prop or `styled` function syntax.

```jsx
import { Global, Stack, Flex, media, styled } from '@intouchg/components'

const Heading = styled.h3({
	fontSize: '1.5rem',
	lineHeight: '1.2',
	color: 'var(--color-text)',
})

const Card = (props) => (
	<Stack
		{...props}
		css={{
			padding: '16px',
			borderRadius: '4px',
			boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.2)',
			[media.lg]: {
				padding: '24px',
				borderRadius: '8px',
			},
		}}
	/>
)

const App = () => (
	<>
		<Global
			reset
			style={`
                :root {
                    --color-blue: #0000ff;
                    --color-text: #111111;
                }
			`}
		/>
		<Stack>
			<Heading as="h1" css={{ color: 'var(--color-blue)' }}>
				Hello world!
			</Heading>
			<main css={{ marginTop: '16px' }}>
				<Flex as="section" css={{ padding: '8px' }}>
					<Card>
						<Heading>Hello world</Heading>
						<p>Thanks for taking a look!</p>
					</Card>
				</Flex>
			</main>
		</Stack>
	</>
)
```

## Form Component Styles

The source code for all four form components (Checkbox, Radio, Select, and Toggle) follows the same markup pattern:

```jsx
<StyledContainer className={className}>
	<input {...props} ref={ref} /> {/* Hidden form element */}
	<span aria-hidden="true">{icon}</span> {/* Styles and icon */}
</StyledContainer>
```

These components have minimal default styles which mimic browser defaults, which allows for easily customizing styles. It's recommended to check the source code for these components to see the default styles, or explore them in browser devtools. Examples of customizing the components are shown below.

### Checkbox and Radio Example

The Checkbox and Radio components share all of their styles except the `border-radius`. The Checkbox also uses the `Checkmark` icon by default while the Radio uses the `Dot` icon.

```jsx
import { Checkbox } from '@intouchg/components'
import styled from 'styled-components'

const CustomCheckbox = styled(Checkbox)`
	width: 1.5rem;
	height: 1.5rem;

	span {
		border: 1px solid #767676;
		border-radius: 35%;
	}

	svg {
		fill: #ffffff;
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

	input:hover:not(:disabled) + span {
		border-color: #4f4f4f;
	}

	input:checked:hover:not(:disabled):not(:active) + span {
		background-color: #225ec1;
		border-color: #225ec1;
	}

	input:active + span {
		border-color: #8d8d8d;
	}

	input:checked:active + span {
		background-color: #4e94f7;
		border-color: #4e94f7;
	}
`
```

### Select Example

The Select component uses the `Chevron` icon by default.

```jsx
import { Select } from '@intouchg/components'
import styled from 'styled-components'

const CustomSelect = styled(Select)`
	max-width: 300px;

	select {
		color: #000000;
		border: 1px solid #000000;
		border-radius: 3px;
	}

	svg {
		fill: #000000;
	}

	select:disabled {
		color: #a6a6a6;
		background-color: #f8f8f8;
		border-color: #d1d1d1;
	}

	select:disabled + span svg {
		fill: #a6a6a6;
	}
`
```

### Toggle Example

The Toggle is a native checkbox element, and uses the `Dot` icon by default.

```jsx
import { Toggle } from '@intouchg/components'
import styled from 'styled-components'

const CustomToggle = styled(Toggle)`
	width: 3.5rem;
	height: 2rem;

	span {
		border: 1px solid #767676;
		border-radius: 55% / 100%;
	}

	svg {
		width: 50%;
		fill: #0277f6;
		stroke: #0277f6;
		stroke-width: 18%;
		transform: translateX(0%);
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
`
```

## Prior Art

### Components

-   [Rebass](https://rebassjs.org/)
-   [@novas/components](https://github.com/codynova/components) - `@intouchg/components@0.2.0-alpha.1` and later is forked from `@novas/components`

### Accessibility

-   [Inclusively Hiding & Styling Checkboxes and Radio Buttons](https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/), Sara Soueidan
-   [Modern CSS Solutions for Old CSS Projects](https://moderncss.dev/), Stephanie Eckles
-   [Select Your Poison](https://www.24a11y.com/2019/select-your-poison/), Sarah Higley

### Creators

-   [Brent Jackson](https://jxnblk.com/) - gatsbyjs, styled-system, theme-ui, rebass, mdx
-   [Max Stoiber](https://mxstbr.com/thoughts) - styled-components, component libraries
-   [Mark Dalgleish](https://github.com/markdalgleish) - css modules, playroom, braid
-   [Lee Robinson](https://leerob.io/blog) - nextjs, styled-components
