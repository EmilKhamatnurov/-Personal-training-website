import emailjs from '@emailjs/browser'
// Material UI
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
// React imports
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import styles from './Form.module.scss'

function Form({ selectedService, setIsLoading }) {
	// SUCCESS window
	const [openSuccessDialog, setOpenSuccessDialog] = useState(false)
	// SUCCESS Function
	const handleClickOpenSuccessDialog = () => {
		setOpenSuccessDialog(true)
	}
	const handleCloseSuccessDialog = () => {
		setOpenSuccessDialog(false)
	}

	// ERROR window
	const [openErrorDialog, setOpenErrorDialog] = useState(false)
	// ERROR Function
	const handleClickOpenErrorDialog = () => {
		setOpenErrorDialog(true)
	}
	const handleCloseErrorDialog = () => {
		setOpenErrorDialog(false)
	}

	// ОТПРАВКА ФОРМЫ НА ПОЧТУ
	const { register, handleSubmit, formState: { errors }, } = useForm()
	const onSubmit = (data) => {
		const userData = {
			...data,
			service: selectedService
		}
		setIsLoading(true)
		emailjs.send(
			'service_beqcijo', 'template_sswu9sn', userData, '_g4X_2BtwbRFLl7PY'
		)
			.then((response) => {
				console.log('SUCCESS!', response.status, response.text)
				setIsLoading(false)
				handleClickOpenSuccessDialog()
			})
			.catch((err) => {
				console.log('FAILED...', err)
				setIsLoading(false)
				handleClickOpenErrorDialog()
			})
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<label className={styles.form__labe}>Имя и Фамилия*</label>
			<input className={styles.form__input}
				{...register("name", { required: "Поле обязательно для ввода", minLength: 3 })} placeholder="Имя и Фамилия" />

			{/* Email */}
			<label className={styles.form__labe}>Email*</label>
			<input className={styles.form__input} {...register("email", {
				required: "Поле обязательно для ввода", pattern: {
					value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
					message: "Некорректный email"
				}
			})} placeholder="Адрес электронной почты" />

			{/* Номер телефона */}
			<label className={styles.form__labe}>Телефон*</label>
			<input className={styles.form__input} {...register("phone_number", {
				required: "Поле обязательно для ввода"
			})} placeholder="Номер телефона" />

			{/* Стаж тренировок */}
			<label className={styles.form__labe}>Стаж тренировок*</label>
			<input className={styles.form__input}
				{...register("experience", { required: "Поле обязательно для ввода", })} placeholder="Стаж тренировок" />
			{/* Ограничения по здоровью */}
			<label className={styles.form__labe}>Ограничения по здоровью*</label>
			<input className={styles.form__input}
				{...register("health limit", { required: "Поле обязательно для ввода", })} placeholder="Ограничения по здоровью" />

			{/* Лекарственные препараты */}
			<label className={styles.form__labe}>Принимаете ли лекарственные препараты*</label>
			<input type='checkbox' className={styles.form__input}
				{...register("medicines", { required: "Поле обязательно для ввода", })} placeholder="Лекарственные препараты" />

			{/* Анализы крови */}
			<label className={styles.form__labe}>Прикрепите если есть свежие анализы крови (3 мес.)</label>
			<input type='file' className={styles.form__input}
				{...register("analysis", { required: false })} />

			{/* Пол */}
			<label className={styles.form__labe}>Пол</label>
			<select className={styles.form__select} {...register("gender")}>
				<option value="мужчина">Мужчина</option>
				<option value="женщина">Женщина</option>
			</select>
			<input className={styles.form__button} type="submit" />
			{/* SUCCESS Window */}
			<Dialog
				open={openSuccessDialog}
				onClose={handleCloseSuccessDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">
					{"Уведомление"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{"Ваша заявка принята. С Вами свяжутся в ближайшее время"}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseSuccessDialog}>Закрыть</Button>
				</DialogActions>
			</Dialog>
			{/* ERROR Window */}
			<Dialog
				open={openErrorDialog}
				onClose={handleCloseErrorDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">
					{"Уведомление"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{"Что-то пошло не так, попробуйте еще раз"}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseErrorDialog}>Закрыть</Button>
				</DialogActions>
			</Dialog>
		</form>

	)
}

export default Form