import React from 'react'
import servises from '../../data/services.json'
import styles from './Services.module.scss'

function Services({ onClick, checkedService }) {
	return (
		<div className={styles.services}>
			{servises.map(service => (
				// Карта услуги
				// checkedService === service.title ? { ...styles.service, ...styles.service_checked } : styles.service 
				<div className={checkedService == service.title ? styles.service_checked : styles.service} key={service.id}>
					<div className={styles.service__header}>
						<div className="service__name">
							<p className={styles.service__title}>{service.title}</p>
							<p className={styles.service__price}>{service.price}</p>
						</div>
						<input className={styles.service__checkbox} type="radio" name="checked" checked={checkedService == service.title} readOnly={true} />
					</div>
					<p className={styles.service__description}>{service.description}</p>
					{/* Список параметров услуги */}
					{/* <ul className={styles.service__list}>
						<li className={styles.service__item}>
							<img src="/check-icon.svg" /> {" "}
							{service.list[0]}
						</li>
						<li className={styles.service__item}>
							<img src="/check-icon.svg" /> {" "}
							{service.list[1]}
						</li>
						<li className={styles.service__item}>
							<img src="/check-icon.svg" /> {" "}
							{service.list[2]}
						</li>
					</ul> */}
					{/* Кнопка выбрать */}
					<button onClick={() => onClick(service.title)} className={styles.service__button}>Выбрать</button>
					{/* {service.label && (<img className={styles.service__label} src="/popular-label.png" />)} */}
				</div>
			))}
		</div>
	)
}

export default Services

