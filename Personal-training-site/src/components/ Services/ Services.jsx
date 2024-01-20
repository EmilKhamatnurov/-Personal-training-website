import servises from '../../data/services.json'
import styles from './Services.module.scss'
function Services() {
	return (
		<div className={styles.services}>
			{servises.map(service => (
				// Карта услуги
				<div className={styles.service} key={service.id}>
					<div className={styles.service__header}>
						<p className={styles.service__title}>{service.title}</p>
						<p className={styles.service__price}>{service.price}</p>
					</div>
					<p className={styles.service__description}>{service.description}</p>
					<ul className={styles.service__list}>
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
					</ul>
					<button className={styles.service__button}>Выбрать</button>
					{/* {service.label && (<img className={styles.service__label} src="/popular-label.png" />)} */}
				</div>



			))}
		</div>
	)
}

export default Services

/*
<span class="title">Beginner</span>
						<span class="price">Free</span>
					</div>
					<p class="desc">Etiam ac convallis enim, eget euismod dolor.</p>
					<ul class="lists">
						<li class="list">
					
							<span>Aenean quis</span>
						</li>
						<li class="list">
							
							<span>Morbi semper</span>
						</li>
						<li class="list">
							
							<span>Tristique enim nec</span>
						</li>
					</ul>
					<button type="button" class="action">Get Started</button>
*/