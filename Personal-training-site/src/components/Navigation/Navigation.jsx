import React from 'react'
import styles from './Navigation.module.scss'

function Navigation() {
	return (
		<nav className={styles.navigation}>
			<a href="#services">Тарифы тренировок</a>
			<a href="#request">Связаться</a>
		</nav>
	)
}

export default Navigation