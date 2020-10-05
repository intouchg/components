# @i/components

React component library for the Intouch Design System
<br>


### Components

Layout
 - [ ] AspectRatioBox
 - [x] Box
 - [x] Flex
 - [x] Grid
 - [x] Stack
 - [ ] Table

Content
 - [x] Button
 - [x] Heading
 - [x] Icon
 - [x] Image
 - [x] Link

State
 - [x] Accordion
 - [x] AccordionCollapse
 - [x] AccordionToggle
 - [ ] CloseButton (?)
 - [ ] Modal
 - [x] Tabs
 - [x] TabActivate
 - [x] TabContent
 - [ ] Slider

Form
 - [ ] Checkbox
 - [ ] DateTime
 - [-] Form
 - [-] FormItem / FormField
 - [x] Input(s)
 - [ ] Label
 - [ ] Radio
 - [ ] Select
 - [ ] Switch/Toggle

Molecules
 - [ ] Calendar



### Architecture

##### `shouldForwardProp` and `createShouldForwardProp`

This lib exports a custom `createShouldForwardProp` function for use with the `shouldForwardProp` option in `styled-components` or `@emotion`. This lib's `createShouldForwardProp` function accepts an array of strings representing the prop names to forward. The `createShouldForwardProp` function will automatically forward all HTML attributes and filter all default and custom `styled-system` props.