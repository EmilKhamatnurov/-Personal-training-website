import React, { useEffect, useState } from 'react'
import slides from '../../data/slides.json'
import SliderBtn from '../Buttons/SliderBtn'
import Container from '../Container/Container'
import Slide from './Slide/Slide'
import styles from './Slider.module.scss'
function Slider() {

	// Текущий слайд
	const [currentSlide, setCurrentSlide] = useState(0)
	// Функции обработки кнопок слайдера
	const nextSlide = () => {
		setCurrentSlide((currentSlide + 1) % slides.length)
	}
	const prevSlide = () => {
		setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
	}

	// Автоматические переключение слайдов  Задержка 5 секунд
	useEffect(() => {
		const timer = setInterval(() => {
			nextSlide()
		}, 5000)
		return () => clearInterval(timer)
	}, [currentSlide])

	return (
		<Container styleClass='container_full-width'>
			<div className={styles.slider}>
				<SliderBtn
					img="/prev-btn-image.png"
					onClick={prevSlide}
					styleClass={styles.slider__prevBtn} />
				<SliderBtn
					img="/next-btn-image.png"
					onClick={nextSlide}
					styleClass={styles.slider__nextBtn} />

				{/* Рендер слайдов */}
				<div>
					{slides.map((slide) => (
						<div
							className={styles.slide} key={slide.id}
							style={{
								background: `url('${slide.image}') center top / cover no-repeat`,
								transition: 'opacity 1s ease-in-out, display 1s  ease-in-out',
								display: slide.id === currentSlide ? 'block' : 'none',
								// opacity: slide.id === currentSlide ? 1 : 0
							}}>
							{/* <Container> */}
							<Slide
								title={slide.title}
								subtitle={slide.subtitle} />
							{/* </Container> */}
						</div>
					))}
				</div>
				{/* Пагинация */}
				<div className={styles.slider__pagination}>
					{slides.map((_, index) => (
						<button className={currentSlide == index ? styles.slider__paginationBtn : styles.slider__paginationBtn_active} key={index} onClick={() => setCurrentSlide(index)}></button>
					))}
				</div>
			</div>
		</Container>
	)
}

export default Slider