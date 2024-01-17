import { useForm } from "react-hook-form"
import styles from './Form.module.scss'
function Form() {
	const { register, handleSubmit, formState: { errors }, } = useForm()

	const onSubmit = (data) => console.log(data)

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<label className={styles.form__labe}>Имя*</label>
			<input className={styles.form__input} {...register("Name", { required: "Поле обязательно для ввода", minLength: 3 })} placeholder="Имя" />
			<label className={styles.form__labe}>Возраст*</label>
			<input className={styles.form__input} placeholder="Возраст" type="number" {...register("age", {
				min: 18,
				max: 99
			})} />
			<label className={styles.form__labe}>Email*</label>
			<input className={styles.form__input} {...register("Email", {
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
			{/* <label className={styles.form__labe}>Сообщение*</label>
			<textarea className={styles.form__input} {...register("Message")} placeholder="Сообщение" /> */}
			<input className={styles.form__button} type="submit" />
		</form>
	)
}

export default Form