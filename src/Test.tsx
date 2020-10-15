import React from 'react'
import {
	Accordion,
	AccordionToggle,
	AccordionCollapse,
	Box,
	Button,
	Flex,
	Form,
	FormItem,
	FormError,
	Heading,
	Image,
	Input,
	Link,
	Stack,
	Tabs,
	TabActivate,
	TabContent,
	Text,
} from './index'

const Test = () => {
	const preventDefault = (event: React.MouseEvent<HTMLElement>) => event.preventDefault()

	return (
		<>
			<Box padding={4}>
				<Form validators={[
					{
						id: 'name',
						validator: (values) => {
							if (values.name !== 'Cody') return 'errif'
							else return true
						}
					}
				]}>
					{({ validate, validating }) => (
						<>
							{validating && (
								<span>validating</span>
							)}
							<FormItem
								id="name"
								validators={[
									(values) => new Promise((resolve) => {
										setTimeout(() => {
											if (values.name === 'Cody') {
												resolve(true)
											}
											else {
												resolve('error')
											}
										}, 1000)
									}),
								]}
							>
								{({ bind, validating }) => (
									<>
										<Input
											type="text"
											border="2px solid"
											borderColor="black"
											{...bind()}
										/>
										{validating && (
											<span>VALIDATING</span>
										)}
									</>
								)}
							</FormItem>
							<FormError id="name">
								{(errors) => errors.map((error) => (
									<Text key={error} color="red">
										{error}
									</Text>
								))}
							</FormError>
							<button onClick={async () => {
								if (await validate()) {
									console.log(true)
								}
							}}>Validate Form</button>
						</>
					)}
				</Form>
			</Box>
			<Box padding={4}>
				<Flex>
					<Stack>
						<Heading padding={2}>
							Button
						</Heading>
						<Button onClick={() => {}}>
							Clickable Button
						</Button>
					</Stack>
				</Flex>
			</Box>
			<Box padding={4}>
				<Flex>
					<Stack>
						<Heading padding={2}>
							Link
						</Heading>
						<Link
							href=""
							onClick={preventDefault}
						>
							Clickable Link
						</Link>
					</Stack>
				</Flex>
			</Box>
			<Box padding={4}>
				<Flex>
					<Heading padding={2}>
						Flex
					</Heading>
				</Flex>
				<Flex>
					<Text padding={2}>
						Flex 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut enim eu ante mattis vulputate. Donec venenatis, diam sed rhoncus pharetra, nisi nisl maximus dui, vel iaculis justo nisi non justo. Vestibulum malesuada arcu non turpis lobortis, et tempor arcu tincidunt. Nunc malesuada ex lorem, et placerat lectus congue ac.
					</Text>
					<Text padding={2}>
						Flex 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut enim eu ante mattis vulputate. Donec venenatis, diam sed rhoncus pharetra, nisi nisl maximus dui, vel iaculis justo nisi non justo. Vestibulum malesuada arcu non turpis lobortis, et tempor arcu tincidunt. Nunc malesuada ex lorem, et placerat lectus congue ac.
					</Text>
					<Text padding={2}>
						Flex 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut enim eu ante mattis vulputate. Donec venenatis, diam sed rhoncus pharetra, nisi nisl maximus dui, vel iaculis justo nisi non justo. Vestibulum malesuada arcu non turpis lobortis, et tempor arcu tincidunt. Nunc malesuada ex lorem, et placerat lectus congue ac.
					</Text>
				</Flex>
			</Box>
			<Stack padding={4}>
				<Heading padding={2}>
					Stack
				</Heading>
				<Text padding={2}>
					Stack 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut enim eu ante mattis vulputate. Donec venenatis, diam sed rhoncus pharetra, nisi nisl maximus dui, vel iaculis justo nisi non justo. Vestibulum malesuada arcu non turpis lobortis, et tempor arcu tincidunt. Nunc malesuada ex lorem, et placerat lectus congue ac.
				</Text>
				<Text padding={2}>
					Stack 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut enim eu ante mattis vulputate. Donec venenatis, diam sed rhoncus pharetra, nisi nisl maximus dui, vel iaculis justo nisi non justo. Vestibulum malesuada arcu non turpis lobortis, et tempor arcu tincidunt. Nunc malesuada ex lorem, et placerat lectus congue ac.
				</Text>
				<Text padding={2}>
					Stack 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut enim eu ante mattis vulputate. Donec venenatis, diam sed rhoncus pharetra, nisi nisl maximus dui, vel iaculis justo nisi non justo. Vestibulum malesuada arcu non turpis lobortis, et tempor arcu tincidunt. Nunc malesuada ex lorem, et placerat lectus congue ac.
				</Text>
			</Stack>
			<Box padding={4}>
				<Flex>
					<Heading padding={2}>
						Accordion
					</Heading>
				</Flex>
				<Accordion defaultActiveId="0">
					<AccordionToggle id="0">
						{(active) => (
							<Text padding={2}>
								Accordion Toggle 1 - Click to Toggle
							</Text>
						)}
					</AccordionToggle>
					<AccordionCollapse id="0">
						{(active) => (
							<Text padding={2}>
								Accordion Content 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut enim eu ante mattis vulputate. Donec venenatis, diam sed rhoncus pharetra, nisi nisl maximus dui, vel iaculis justo nisi non justo. Vestibulum malesuada arcu non turpis lobortis, et tempor arcu tincidunt. Nunc malesuada ex lorem, et placerat lectus congue ac.
							</Text>
						)}
					</AccordionCollapse>
					<AccordionToggle id="1">
						{(active) => (
							<Text padding={2}>
								Accordion Toggle 2 - Click to Toggle
							</Text>
						)}
					</AccordionToggle>
					<AccordionCollapse id="1">
						{(active) => (
							<Text padding={2}>
								Accordion Content 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut enim eu ante mattis vulputate. Donec venenatis, diam sed rhoncus pharetra, nisi nisl maximus dui, vel iaculis justo nisi non justo. Vestibulum malesuada arcu non turpis lobortis, et tempor arcu tincidunt. Nunc malesuada ex lorem, et placerat lectus congue ac.
							</Text>
						)}
					</AccordionCollapse>
				</Accordion>
			</Box>
			<Box padding={4}>
				<Flex>
					<Heading padding={2}>
						Tabs
					</Heading>
				</Flex>
				<Tabs defaultActiveId="0">
					<Flex justifyContent="flex-start">
						<TabActivate id="0">
							{(active) => (
								<Text padding={2}>
									Tab Activate 1 - Click to Activate
								</Text>
							)}
						</TabActivate>
						<TabActivate id="1">
							{(active) => (
								<Text padding={2}>
									Tab Activate 2 - Click to Activate
								</Text>
							)}
						</TabActivate>
					</Flex>
					<TabContent id="0">
						{(active) => (
							<Text padding={2}>
								Tab Content 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut enim eu ante mattis vulputate. Donec venenatis, diam sed rhoncus pharetra, nisi nisl maximus dui, vel iaculis justo nisi non justo. Vestibulum malesuada arcu non turpis lobortis, et tempor arcu tincidunt. Nunc malesuada ex lorem, et placerat lectus congue ac.
							</Text>
						)}
					</TabContent>
					<TabContent id="1">
						{(active) => (
							<Text padding={2}>
								Tab Content 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut enim eu ante mattis vulputate. Donec venenatis, diam sed rhoncus pharetra, nisi nisl maximus dui, vel iaculis justo nisi non justo. Vestibulum malesuada arcu non turpis lobortis, et tempor arcu tincidunt. Nunc malesuada ex lorem, et placerat lectus congue ac.
							</Text>
						)}
					</TabContent>
				</Tabs>
			</Box>
			<Box padding={4}>
				<Stack>
					<Heading padding={2}>
						Image
					</Heading>
					<Image
						aspectRatio={16 / 9}
						width={1}
						maxWidth={200}
						src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
						alt="Google Logo"
					/>
				</Stack>
			</Box>
		</>
	)
}

export { Test }
