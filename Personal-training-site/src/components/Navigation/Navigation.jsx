import React from 'react'
import styles from './Navigation.module.scss'

function Navigation() {
	return (
		<nav className={styles.navigation}>
			<a href="#">Главная</a>
			<a href="#">Тарифы тренировок</a>
			<a href="#">Связаться</a>
		</nav>
	)
}

export default Navigation