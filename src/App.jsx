
import VerticalMenu from './components/VerticalMenu'
import Welcome from './components/Welcome'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './styles/root.css'

function App() {

	return (
		<Router>
			<div>
				<Link to="/">Home</Link> | <Link to="/sobre">Sobre</Link>
				<Routes>
					<Route path="/" element={<div>Página Inicial</div>} />
					<Route path="/sobre" element={<div>Página Sobre</div>} />
				</Routes>
				{/*<VerticalMenu />
				<Welcome />*/}

			</div>
		</Router>
	)
}

export default App
