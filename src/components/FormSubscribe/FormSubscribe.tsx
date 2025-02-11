import CustomInput from '../СustomInput/FormInputText'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './form.module.scss'
import { useEffect, useState } from 'react'
import ModalWindow from '../ModalWindow/ModalWindow'

export interface FormValues {
  firstName: string
  lastName: string
  email: string
}

const FormSubscribe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  })
  const [isOpen, setIsOpen] = useState(false)
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form Submitted', data)
    reset()
    setIsOpen(true)
  }
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => document.body.classList.remove('no-scroll') // Очистка при размонтировании
  }, [isOpen])
  return (
    <>
      <ModalWindow setIsOpen={() => setIsOpen(false)} isOpen={isOpen} />
      <section className={styles.section}>
        <div className="container">
          <div className={styles.form}>
            <h2>Keep in touch</h2>
            <p>
              Get our travel advice, global views and travel freebies in your
              inbox
            </p>
            <form
              className={styles.subscribe}
              action=""
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <CustomInput
                  placeholder="First Name"
                  className={styles.inputName}
                  {...register('firstName', {
                    required: 'First name is required',
                  })}
                />
                <CustomInput
                  className={styles.inputName}
                  {...register('lastName', {
                    required: 'Last name is required',
                  })}
                  placeholder="Last Name"
                />
              </div>

              <CustomInput
                className={styles.email}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                })}
                placeholder="Email"
              />
              {errors.email && <p>{errors.email.message}</p>}
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default FormSubscribe
