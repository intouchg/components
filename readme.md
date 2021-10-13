# @intouchg/components

React component library for the [Intouch Design System](https://ids.intouchg.co/)
<br>

### Architecture

##### `shouldForwardProp` and `createShouldForwardProp`

This lib exports a custom `createShouldForwardProp` function for use with the `shouldForwardProp` option in `styled-components` or `@emotion`. This lib's `createShouldForwardProp` function accepts an array of strings representing the prop names to forward. The `createShouldForwardProp` function will automatically forward all HTML attributes and filter all default and custom `styled-system` props.

### Prior Art

#### Components

-   [Rebass](https://rebassjs.org/)

#### Accessibility

-   [Inclusively Hiding & Styling Checkboxes and Radio Buttons](https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/), Sara Soueidan
-   [Modern CSS Solutions for Old CSS Projects](https://moderncss.dev/), Stephanie Eckles
-   [Select Your Poison](https://www.24a11y.com/2019/select-your-poison/), Sarah Higley

#### Creators

-   [Brent Jackson](https://jxnblk.com/) - gatsbyjs, styled-system, theme-ui, rebass, mdx
-   [Max Stoiber](https://mxstbr.com/thoughts) - styled-components, component libraries
-   [Mark Dalgleish](https://github.com/markdalgleish) - css modules, playroom, braid
-   [Lee Robinson](https://leerob.io/blog) - nextjs, styled-components
