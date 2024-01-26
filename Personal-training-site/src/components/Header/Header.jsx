import React from 'react'
import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'

import styles from './Header.module.scss'

function Header() {
	return (
		<Container>
			<header className={styles.header}>
				<Logo
					text='DNKA'
					logoColor='black'
				/>
				<Navigation />
			</header>
		</Container>
	)
}

export default Header