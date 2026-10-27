
import { useEffect, useState } from 'react'
import s from '../styles/welcome.module.css'

let aniDir = 1
let aniTerm = null
const terms = [
	"imaginação",
	"criatividade",
	"fantasia",
	"ideia",
	"inspiração",
	"StoryTree"
]

function CurrentTitle() {
	const [termId, setTermId] = useState(0)
	const [termWidth, setTermWidth] = useState(0)
	
	useEffect(() => {
		aniTerm = setTimeout(() => {
			setTimeout(() => {
				setTermWidth(prevTermWidth => {
					if (prevTermWidth == (terms[termId].length * (1 + aniDir)/2)) {
						aniDir = aniDir * (-1)
						if (aniDir == 1) setTermId(prevTermId => {
							if (prevTermId == terms.length - 1) return 0
							else return prevTermId + 1
						})
					}
					return prevTermWidth + aniDir
				})
			}, (aniDir == 1) && (termWidth == terms[termId].length)? 1000: 0)
		}, (aniDir == 1) ? 120 : 60)

		return () => {
			clearTimeout(aniTerm)
		}
	}, [termWidth, termId])

	return (
		<h1 className={s.h1}>
			Liberte a sua <mark style={
				{width: `${ termWidth }ch`}
			}> {terms[termId]} </mark>
		</h1>
	)
}

function Welcome() {
	return (
		<main className={s.main}>
			<CurrentTitle />
			<p className={s.p}>
				Sua jornada através da imaginação começa aqui.<br/>
				Explore, crie e compartilhe histórias com o mundo.
			</p>
		</main>
	)
}

export default Welcome