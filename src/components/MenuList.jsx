
import { CircleQuestionMarkIcon, LibraryIcon, CircleUserIcon } from 'lucide-react'
import s from '../styles/menu-list.module.css'

function MenuList() {
	return (
		<ul className={s.ul}>
			<li className={s.li}>
				<a href="/profile.html">
					<CircleUserIcon className={s.icon}/>
					My Account
				</a>
			</li>
			<li className={s.li}>
				<a href="/explore.html">
					<LibraryIcon className={s.icon}/>
					Discover
				</a>
				
			</li>
			<li className={s.li}>
				<a href="/how-to-use.html">
					<CircleQuestionMarkIcon className={s.icon}/>
					How to use?
				</a>
			</li>
		</ul>
	)
}

export default MenuList