
import { useEffect, useState } from 'react'
import s from '../styles/welcome.module.css'

function CurrentTitle() {
	const [titleId, setTitleId] = useState(0);
	const terms = [
		"imagination",
		"creativity",
		"fantasy",
		"knowledge",
		"ideas",
		"inspiration",
		"StoryTree"
	]

	useEffect(() => {
		const intervalTerm = setInterval(() => {
			setTitleId((prevTitleId) => {
				if (prevTitleId >= (terms.length - 1)) return 0
				else return (prevTitleId + 1)
			})
		}, 3000);
		// Limpa o intervalo quando o componente for desmontado
		return () => {
			clearInterval(intervalTerm)
		};
	}, []);

	return (
		<h1 className={s.h1}>
			Unleash your <mark style={{width: "50%"}}>{terms[titleId]}</mark>
		</h1>
	)
}

function Welcome() {
	return (
		<main className={s.main}>
			<CurrentTitle />
			<p className={s.p}>
				Your journey through the imagination starts here.<br/>
				Explore, read, write and connect with your creativity.
			</p>
		</main>
	)
}

export default Welcome