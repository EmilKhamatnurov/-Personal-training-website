import servises from '../../data/services.json'
import styles from './Services.module.scss'
function Services() {
	return (
		servises.map(service => (
			<div className={styles.service} key={service.id}>
				<div className={styles.service__labels}>
					<p className={styles.service__period}>{service.period}</p>
					{/* Label услуги */}
					{service.label && (<p className={styles.service__label}>{service.label}</p>)}
				</div>
				<p className={styles.service__price}>{service.price}</p>
				<p className={styles.service__description}>{service.description}</p>
			</div>
		))
	)
}

export default Services