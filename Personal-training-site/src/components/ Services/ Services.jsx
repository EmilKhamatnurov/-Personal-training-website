import React from 'react'
import servises from '../../data/services.json'
import AccordionUsage from '../Accordion/Accordion'
import styles from './Services.module.scss'

function Services({ onClick, checkedService }) {
	// Открытый Accordion State
	const [expanded, setExpanded] = React.useState('none')
	const expandedHandleChange = (accordionName) => (event, newExpanded) => {
		setExpanded(newExpanded ? accordionName : false)
	}

	return (
		<div className={styles.services}>
			{servises.map(service => (
				<div className={checkedService == service.title ? styles.service_checked : styles.service} key={service.id}>
					<div className={styles.service__header}>
						<div className="service__name">
							<p className={styles.service__title}>{service.title}</p>
							<p className={styles.service__price}>{service.price}</p>
						</div>
						<input className={styles.service__checkbox} type="radio" name="checked" checked={checkedService == service.title} readOnly={true} />
					</div>
					{/* Описание услуги */}
					<AccordionUsage
						AccordionId={service.id}
						Expanded={expanded}
						handleChange={expandedHandleChange}
						accordionTitle="Описание услуги"
						description={service.list}
					/>
					{/* Кнопка выбрать */}
					<button onClick={() => onClick(service.title)} className={styles.service__button}>Выбрать</button>
				</div>
			))}
		</div>
	)
}

export default Services

