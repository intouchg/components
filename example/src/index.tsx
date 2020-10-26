import React from 'react'
import { render } from 'react-dom'
import { Test } from '../../src'

const App = () => (
	<Test />
)

render(<App />, document.getElementById('app'))
