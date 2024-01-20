import React from 'react'
import styles from './Logo.module.scss'
import blackLogo from '/astro logo black.png'
import whiteLogo from '/astro logo white.png'
function Logo({ logoColor, text = 'Логотип' }) {
	if (logoColor === "black") {
		return (
			<a href="#">
				<img className={styles.siteLogo} src={blackLogo} alt="Логотип сайта" />
			</a>
		)
	}
	if (logoColor === "white") {
		return (
			<a href="#">
				<img className={styles.siteLogo} src={whiteLogo} alt="Логотип сайта" />
			</a>
		)
	}
	return (
		<a href="#">{text}</a>
	)
}

export default Logo