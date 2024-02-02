import React, { useState } from 'react'
import Services from '../ Services/ Services'
import Container from '../Container/Container'
import Form from '../Form/Form'
import Heading from '../Heading/Heading'
import Loader from '../Loader/Loader'
import Slider from '../Slider/Slider'

function Main() {
	const [service, setService] = useState('Начинающий')
	const [isFormLoading, setIsFormLoading] = useState(false)
	return (
		<>
			{isFormLoading && <Loader />}
			<Slider />
			<Container>
				<Heading
					text="Тарифы тренировок"
					level='h2'
					hrefLink="services" />
				<Services
					checkedService={service}
					onClick={setService} />
				<Heading
					text="Оставьте заявку"
					level='h2'
					hrefLink="request" />
				<Form
					selectedService={service}
					setIsLoading={setIsFormLoading}
				/>

			</Container>
		</>
	)
}

export default Main