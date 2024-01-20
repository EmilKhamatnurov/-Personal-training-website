function SliderBtn({ img, onClick, styleClass }) {
	return (
		<button className={styleClass} onClick={onClick}>
			<img src={img} />
		</button>
	)
}

export default SliderBtn