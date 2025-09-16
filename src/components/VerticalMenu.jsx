
import MenuList from './MenuList'
import ContactList from './ContactList'

import s from '../styles/vertical-menu.module.css'

function VerticalMenu() {

	return (
		<div>
			<nav className={s.nav}>
				<MenuList />
				<ContactList />
			</nav>

			<div className={s.dimScreen}></div>
		</div>
	)
}

export default VerticalMenu