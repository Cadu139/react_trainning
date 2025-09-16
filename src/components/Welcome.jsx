
import { useState } from 'react'
import s from '../styles/welcome.module.css'

function CurrentTitle() {

	const welcomes = [
		'Criativity', 
		'Inspiration',
		'Imagination',
		'Expression',
		'StoryTree'
	]

	const [currentTitle, setCurrentTitle] = useState(0)

	setInterval(() => {
		if (currentTitle >= welcomes.length - 1) setCurrentTitle(0)
		else setCurrentTitle(currentTitle + 1)
	}, 3000)
	
	return welcomes[currentTitle]

}

function Welcome() {
	return (
		<main className={s.main}>
			<h1 className={s.main}><CurrentTitle /></h1>
			<p className={s.main}>
				Your journey through the imagination starts here.<br/>
				Explore, read, write and connect with your creativity.
			</p>
		</main>
	)
}

export default Welcome