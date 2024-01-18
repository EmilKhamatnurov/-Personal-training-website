function Slide({
	text, image, link
}) {
	const slideBackgroundStyle = {
		background: `url(${image}) center center / cover no-repeat`
	}
	return (
		<div style={slideBackgroundStyle} className='slide'>
			<p className='slide__text'>{text}</p>
		</div>
	)
}

export default Slide