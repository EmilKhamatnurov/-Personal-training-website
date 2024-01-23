import React from 'react'
import styles from './Navigation.module.scss'

function Navigation() {
	return (
		<nav className={styles.navigation}>
			<a className={styles.navigation__link} href="#services">Тарифы тренировок</a>
			<a className={styles.navigation__link} href="#request">Связаться</a>
		</nav>
	)
}

export default Navigation