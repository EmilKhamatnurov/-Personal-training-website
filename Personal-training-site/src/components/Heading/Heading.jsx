import styles from './Heading.module.scss'
function Heading({ level, text }) {
	if (level === 'h1') {
		return (
			<h1 className={styles['site-title']}>{text}</h1>
		)
	}
	else if (level === 'h2') {
		return (<h1 className={styles['section-title']}>{text}</h1>)
	}
}

export default Heading