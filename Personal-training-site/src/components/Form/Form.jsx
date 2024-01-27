import emailjs from '@emailjs/browser'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import * as React from 'react'
import { useForm } from "react-hook-form"
import styles from './Form.module.scss'

function Form({ selectedService }) {
	// Dialog card
	const [open, setOpen] = React.useState(false)
	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}


	// React Hook Form
	const { register, handleSubmit, formState: { errors }, } = useForm()
	const onSubmit = (data) => {
		const userData = {
			...data,
			service: selectedService
		}
		emailjs.send(
			'service_beqcijo', 'template_sswu9sn', userData, '_g4X_2BtwbRFLl7PY'
		)
			.then((response) => {
				console.log('SUCCESS!', response.status, response.text)
				handleClickOpen()
			})
			.catch((err) => {
				console.log('FAILED...', err)
			})
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<label className={styles.form__labe}>Имя*</label>
			<input className={styles.form__input}
				{...register("name", { required: "Поле обязательно для ввода", minLength: 3 })} placeholder="Имя" />

			<label className={styles.form__labe}>Возраст*</label>
			<input className={styles.form__input} placeholder="Возраст" type="number" {...register("age", {
				min: 18,
				max: 99
			})} />

			<label className={styles.form__labe}>Email*</label>
			<input className={styles.form__input} {...register("email", {
				required: "Поле обязательно для ввода", pattern: {
					value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
					message: "Некорректный email"
				}
			})} placeholder="Адрес электронной почты" />

			<label className={styles.form__labe}>Пол</label>
			<select className={styles.form__select} {...register("gender")}>
				<option value="мужчина">Мужчина</option>
				<option value="женщина">Женщина</option>
			</select>
			<input className={styles.form__button} type="submit" />
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Уведомление"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Ваша заявка успешно отправлена
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Отлично</Button>
				</DialogActions>
			</Dialog>
		</form>

	)
}

export default Form