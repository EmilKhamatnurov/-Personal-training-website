import styles from './Slide.module.scss'

function Slide({
	title, subtitle
}) {
	return (
		<div className={styles.slide}>
			<p className={styles.slide__title}>{title}</p>
			<p className={styles.slide__subtitle}>{subtitle}</p>
		</div>
	)
}

export default Slide