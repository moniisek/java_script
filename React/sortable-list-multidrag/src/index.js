
	import React from 'react'
	import ReactDOM from 'react-dom'
	import App from './App'
	import { DndProvider } from 'react-dnd'
	import Backend from 'react-dnd-html5-backend'

	function Wrapper() {
		return (
			<div className="App">
				<DndProvider backend={Backend}>
					<App />
				</DndProvider>
			</div>
		)
	}

	const rootElement = document.getElementById('root')
	ReactDOM.render(<Wrapper />, rootElement)
