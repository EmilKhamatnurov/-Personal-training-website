import styles from './Slide.module.scss'

function Slide({
	title
}) {
	return (
		<div className={styles.slide}>
			<p className={styles.slide__title}>{title}</p>
		</div>
	)
}

export default Slide