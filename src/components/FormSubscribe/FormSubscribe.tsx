import React, { RefObject, useRef, useState } from 'react'
import CustomInput from '../СustomInput/FormInputText'

const FormSubscribe = () => {
  const refFirstNameInput =
    useRef<HTMLInputElement>() as RefObject<HTMLInputElement>
  const refLastNameInput =
    useRef<HTMLInputElement>() as RefObject<HTMLInputElement>
  const refEmailInput =
    useRef<HTMLInputElement>() as RefObject<HTMLInputElement>
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  return (
    <form className="form-subscribe" action="">
      <div>
        <CustomInput
          inputRef={refFirstNameInput}
          placeholder="First Name"
          value={firstName}
          onChange={setFirstName}
          // style={{ width: '300px' }}
        />
        <CustomInput
          inputRef={refLastNameInput}
          placeholder="Last Name"
          value={lastName}
          onChange={setLastName}
          // style={{ width: '300px' }}
        />
      </div>
      <CustomInput
        inputRef={refLastNameInput}
        placeholder="Email"
        value={email}
        onChange={setEmail}
        // style={{ width: '100%' }}
      />
      <input type="submit" value="Subscribe" />
    </form>
  )
}

export default FormSubscribe
