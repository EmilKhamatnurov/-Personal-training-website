import Services from '../ Services/ Services'
import Container from '../Container/Container'
import Form from '../Form/Form'
import Heading from '../Heading/Heading'
import Slider from '../Slider/Slider'


function Main() {
	return (
		<>
			<Slider />
			<Container>
				<Heading
					text="Тарифы тренировок"
					level='h2'
					hrefLink="services" />
				<Services />
				<Heading
					text="Оставьте заявку"
					level='h2'
					hrefLink="request" />
				<Form />
			</Container>
		</>
	)
}

export default Main