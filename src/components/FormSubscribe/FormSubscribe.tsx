import CustomInput from '../СustomInput/FormInputText'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormValues {
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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form Submitted', data)
    reset()
  }

  return (
    <section className="section-form">
      <div className="container">
        <div className="form">
          <h2>Keep in touch</h2>
          <p>
            Get our travel advice, global views and travel freebies in your
            inbox
          </p>
          <form
            className="form-subscribe"
            action=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <CustomInput
                placeholder="First Name"
                {...register('firstName', {
                  required: 'First name is required',
                })}
              />
              <CustomInput
                {...register('lastName', { required: 'Last name is required' })}
                placeholder="Last Name"
              />
            </div>

            <CustomInput
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
  )
}

export default FormSubscribe
