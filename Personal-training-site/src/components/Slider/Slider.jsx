import React, { useState } from 'react'
import styles from './Slider.module.scss'

function Slider() {
	const slides = [

	]
	// Текущий слайд
	const [currentSlide, setCurrentSlide] = useState(0)
	// Функции обработки кнопок слайдера
	const nextSlide = () => {
		setCurrentSlide((currentSlide + 1) % slides.length)
	}
	const prevSlide = () => {
		setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
	}

	return (
		<div className={styles.slider}>
			<button className={styles.slider__prevBtn} onClick={prevSlide}>
				<img src="/prev-btn-image.png" alt="предыдущий слайд" />
			</button>
			<button className={styles.slider__nextBtn} onClick={nextSlide}>
				<img src="/next-btn-image.png" alt="следующий слайд" />
			</button>
			{/* Рендер слайдов */}
			<div>
				{slides.map((slide, index) => (
					<div className={styles.slide} key={index} style={{ display: index === currentSlide ? 'block' : 'none' }}>
						{slide}
					</div>
				))}
			</div>
			{/* Пагинация */}
			<div className={styles.slider__pagination}>
				{slides.map((_, index) => (
					<button key={index} onClick={() => setCurrentSlide(index)}>
						{index + 1}
					</button>
				))}
			</div>
		</div>
	)
}

export default Slider