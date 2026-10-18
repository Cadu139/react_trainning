
import VerticalMenu from './components/VerticalMenu'

import './styles/root.css'

import { Outlet } from 'react-router-dom'

function App() {

	return (
		<div>
			<VerticalMenu />
			<Outlet />
		</div>
	)
}

export default App
