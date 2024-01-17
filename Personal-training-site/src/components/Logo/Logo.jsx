import React from 'react'
import styles from './Logo.module.scss'
function Logo({ logoUrl, text = 'Логотип' }) {
	if (logoUrl) {
		return (
			<a href="#">
				<img className={styles.siteLogo} src={logoUrl} alt="Логотип сайта" />
			</a>
		)
	}
	return (
		<a href="#">{text}</a>
	)
}

export default Logo