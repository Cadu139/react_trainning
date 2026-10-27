
import { Link } from "react-router-dom"

import { CircleQuestionMarkIcon, LibraryIcon, CircleUserIcon } from 'lucide-react'
import s from '../styles/menu-list.module.css'

function MenuList() {
	return (
		<ul className={s.ul}>
			
			<li className={s.li}>
				<Link to="/my_account">
					<CircleUserIcon className={s.icon}/>
					My Account
				</Link>
			</li>
			<li className={s.li}>
				<Link to="/discover">
					<LibraryIcon className={s.icon}/>
					Discover
				</Link>
			</li>
			<li className={s.li}>
				<Link to="/how_to_use">
					<CircleQuestionMarkIcon className={s.icon}/>
					How to use?
				</Link>
			</li>
		</ul>
	)
}

export default MenuList