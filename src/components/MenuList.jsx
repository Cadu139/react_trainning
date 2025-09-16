
import { CircleQuestionMarkIcon, LibraryIcon, CircleUserIcon } from 'lucide-react'
import s from '../styles/menu-list.module.css'

function MenuList() {
	return (
		<ul className={s.ul}>
			<li className={s.li}>
				<CircleUserIcon className={s.icon}/>
				<a href="/profile.html">My Account</a>
			</li>
			<li className={s.li}>
				<LibraryIcon className={s.icon}/>
				<a href="/explore.html">Discover</a>
			</li>
			<li className={s.li}>
				<CircleQuestionMarkIcon className={s.icon}/>
				<a href="/how-to-use.html">How to use?</a>
			</li>
		</ul>
	)
}

export default MenuList