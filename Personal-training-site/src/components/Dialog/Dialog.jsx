import Dialog from '@material-ui/core/Dialog'
import React from 'react'

export default function SimpleDialog() {
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div>
			<button onClick={handleClickOpen}>
				Открыть диалоговое окно
			</button>
			<Dialog onClose={handleClose} open={open}>
				<h2>Привет, это диалоговое окно!</h2>
			</Dialog>
		</div>
	)
}
