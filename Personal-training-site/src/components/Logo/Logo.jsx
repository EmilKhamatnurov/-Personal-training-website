import React from 'react'
import styles from './Logo.module.scss'

function Logo({ logoColor, text = 'Логотип' }) {
	if (text !== 'Логотип' && logoColor === "black") {
		return (
			<a href="#">
				<img
					className={styles.logo}
					src="/Logo black.png"
					alt="Логотип сайта" />
			</a>
		)
	}
	if (text !== 'Логотип' && logoColor === "white") {
		return (
			<a href="#">
				<img
					className={styles.logo}
					src="/Logo white.png"
					alt="Логотип сайта" />
			</a>
		)
	}

	return (
		<a href="#">{text}</a>
	)
}

export default Logo
