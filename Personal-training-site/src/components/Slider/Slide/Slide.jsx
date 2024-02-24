import React from 'react'
import styles from './Slide.module.scss'
function Slide({
	title, description, description_2
}) {

	return (
		<div className={styles.slide}>
			{title && <p className={styles.slide__title}>{title}</p>}
			{description && <p className={styles.slide__description}>{description}</p>}
			{description_2 && <p className={styles.slide__description_2}>{description_2}</p>}
		</div>
	)
}

export default React.memo(Slide)