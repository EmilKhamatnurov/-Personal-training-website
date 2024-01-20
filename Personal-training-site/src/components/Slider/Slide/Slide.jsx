import styles from './Slide.module.scss'

function Slide({
	title, subtitle
}) {
	return (
		<div className={styles.slide}>
			<p className={styles.slide__title}>{title}</p>
			<p className={styles.slide__subtitle}>{subtitle}</p>
			<a href='#request' className={styles.slide__button}>Связаться с нами</a>
		</div>
	)
}

export default Slide