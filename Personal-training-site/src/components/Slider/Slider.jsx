import React, { useState } from 'react'

function Slider() {
	const slides = [
		<div>Слайд 1</div>,
		<div>Слайд 2</div>,
		<div>Слайд 3</div>,
		// добавьте столько слайдов, сколько вам нужно
	]
	const [currentSlide, setCurrentSlide] = useState(0)

	const nextSlide = () => {
		setCurrentSlide((currentSlide + 1) % slides.length)
	}

	const prevSlide = () => {
		setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
	}

	return (
		<div>
			<button onClick={prevSlide}>Назад</button>
			<button onClick={nextSlide}>Вперед</button>
			<div>
				{slides.map((slide, index) => (
					<div key={index} style={{ display: index === currentSlide ? 'block' : 'none' }}>
						{slide}
					</div>
				))}
			</div>
			<div>
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