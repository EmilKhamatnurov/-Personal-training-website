import Services from '../ Services/ Services'
import Container from '../Container/Container'
import Form from '../Form/Form'
import Heading from '../Heading/Heading'

function Main() {
	return (
		<Container>
			<Heading
				text="Тарифы тренировок"
				level='h2' />
			<Services />
			<Heading
				text="Оставьте заявку"
				level='h2' />
			<Form />
		</Container>
	)
}

export default Main