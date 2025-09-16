
import s from '../styles/contact-list.module.css'

function ContactList() {
	return (
		<ul className={s.ul}>
			<li  className={s.li}>
				<a href="#">
					<ion-icon className={s.icon} name="logo-instagram">
					</ion-icon>
				</a>
			</li>
			<li className={s.li}>
				<a href="#">
					<ion-icon className={s.icon} name="logo-whatsapp">
					</ion-icon>
				</a>
			</li>
			<li className={s.li}>
				<a href="#">
					<ion-icon className={s.icon} name="mail-outline">
					</ion-icon>
				</a>
			</li>
		</ul>
	)
}

export default ContactList