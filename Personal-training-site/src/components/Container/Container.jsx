import styles from './Container.module.scss'
function Container({ children, styleClass = 'container' }) {
	return (
		<div className={styles[styleClass]}>
			{children}
		</div>
	)
}

export default Container