
import VerticalMenu from './components/VerticalMenu'
import Welcome from './components/Welcome'

import './styles/root.css'

import { Outlet } from 'react-router-dom'

function App() {

	return (
		<div>
			<VerticalMenu />
			<Welcome />
			<Outlet />
		</div>
	)
}

export default App
