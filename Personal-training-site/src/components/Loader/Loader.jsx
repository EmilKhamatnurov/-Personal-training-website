import React, { useEffect } from 'react'
import './Loader.css'

function Loader() {
	useEffect(() => {
		// При монтировании компонента
		document.body.style.overflow = 'hidden'
		document.documentElement.style.overflow = 'hidden'

		return () => {
			// При размонтировании компонента
			document.body.style.overflow = ''
			document.documentElement.style.overflow = ''
		}
	}, [])
	return (
		<div className="preloader">
			<div className="preloader__row">
				<div className="preloader__item"></div>
				<div className="preloader__item"></div>
			</div>
		</div>)
}

export default Loader