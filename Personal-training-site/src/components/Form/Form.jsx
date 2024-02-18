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
	const { register, handleSubmit, reset, formState: { errors }, } = useForm()
	const onSubmit = (data) => {
		// К письму добавляется выбранная услуга
		const userData = {
			...data,
			service: selectedService
		}
		// console.log(data)
		setIsLoading(true)
		emailjs.send(
			'service_beqcijo', 'template_sswu9sn', userData, '_g4X_2BtwbRFLl7PY'
		)
			.then((response) => {
				console.log('SUCCESS!', response.status, response.text)
				setIsLoading(false)
				handleClickOpenSuccessDialog()
				reset({})
			})
			.catch((err) => {
				console.log('FAILED...', err)
				setIsLoading(false)
				handleClickOpenErrorDialog()
			})
	}

	return (

		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{/* Пол */}
			<div className={styles['form__input-block']}>
				<label className={styles.form__label}>Пол</label>
				<select className={styles.form__select} {...register("gender")}>
					<option value="мужчина">Мужчина</option>
					<option value="женщина">Женщина</option>
				</select>
			</div>

			{/* Имя и фамилия */}
			<div className={styles['form__input-block']}>
				<label className={styles.form__label}>Имя и Фамилия*</label>
				{errors.name && <p className={styles.form__error}>{errors.name.message}</p>}
				<input className={styles.form__input}
					{...register("name", { required: "Поле обязательно для ввода", minLength: 3 })} placeholder="Имя и Фамилия" />
			</div>

			{/* Email */}
			<div className={styles['form__input-block']}>
				<label className={styles.form__label}>Email*</label>
				{errors.email && <p className={styles.form__error}>{errors.email.message}</p>}
				<input className={styles.form__input} {...register("email", {
					required: "Поле обязательно для ввода", pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
						message: "Некорректный email"
					}
				})} placeholder="Адрес электронной почты" />
			</div>

			{/* Номер телефона */}
			<div className={styles['form__input-block']}>
				<label className={styles.form__label}>Телефон*</label>
				{errors.phone_number && <p className={styles.form__error}>{errors.phone_number.message}</p>}
				<input className={styles.form__input} {...register("phone_number", {
					required: "Проверьте поле ввода",
					pattern: {
						value: /^((\+7|7|8)+([-\s()]*\d[-\s()]*){10})$/,
						message: 'Неверный формат номера телефона'
					}
				})} placeholder="Номер телефона" />
			</div>

			{/* Стаж тренировок */}
			<div className={styles['form__input-block']}>
				<label className={styles.form__label}>Стаж тренировок*</label>
				{errors.experience && <p className={styles.form__error}>{errors.experience.message}</p>}
				<input className={styles.form__input}
					{...register("experience", { required: "Поле обязательно для ввода", })} placeholder="Стаж тренировок" />
			</div>

			{/* Ограничения по здоровью */}
			<div className={styles['form__input-block']}>
				<label className={styles.form__label}>Ограничения по здоровью*</label>
				{errors.health_limit && <p className={styles.form__error}>{errors.health_limit.message}</p>}
				<input className={styles.form__input}
					{...register("health_limit", { required: "Поле обязательно для ввода", })} placeholder="Ограничения по здоровью" />
			</div>

			{/* Лекарственные препараты */}
			<div className={styles['form__input-block_row']}>
				<label className={styles.form__label}>Принимаете ли лекарственные препараты?</label>
				<input type='checkbox' className={styles.form__input_checkbox}
					{...register("medicines")} />
			</div>

			{/* Анализы крови */}
			<div className={styles['form__input-block_row']}>
				<label className={styles.form__label}>Есть ли анализы крови?</label>
				<input type='checkbox' className={styles.form__input_checkbox}
					{...register("analysis")} />
			</div>

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
					{"Ошибка"}
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