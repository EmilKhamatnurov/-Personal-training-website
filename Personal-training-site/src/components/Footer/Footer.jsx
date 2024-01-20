import Container from '../Container/Container'
import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"
import styles from "./Footer.module.scss"
function Footer() {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.footer__inner}>
					<Logo
						logoColor='white' />
					<Navigation />
				</div>
			</Container>
		</footer>
	)
}

export default Footer