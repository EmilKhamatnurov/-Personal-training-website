import React from 'react'
import styles from './Logo.module.scss'
import blackLogo from '/astro logo black.png'
import whiteLogo from '/astro logo white.png'

function Logo({ logoColor, text = 'Логотип' }) {
	if (text !== 'Логотип' && logoColor === "black") {
		return (
			<a className={styles.textLogo} href="#">{text}</a>
		)
	}
	if (text !== 'Логотип' && logoColor === "white") {
		return (
			<a className={styles.textLogo_white} href="#">{text}</a>
		)
	}
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