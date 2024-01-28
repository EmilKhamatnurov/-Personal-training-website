import emailjs from '@emailjs/browser'
import Dialog from '@mui/material/Dialog'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import styles from './Form.module.scss'

function Form({ selectedService }) {
	// SUCCESS window
	const [openSuccessDialog, setOpenSuccessDialog] = useState(false)
	const handleClickOpenSuccessDialog = () => {
		setOpenSuccessDialog(true)
	}
	const handleCloseSuccessDialog = () => {
		setOpenSuccessDialog(false)
	}
	// ERROR window
	/* 
	 */

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
				handleClickOpenSuccessDialog()
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
				open={openSuccessDialog}
				handleClose={handleCloseSuccessDialog}
				dialoguetext='Ваша заявка успешно отправлена!' />
		</form>

	)
}

export default Form