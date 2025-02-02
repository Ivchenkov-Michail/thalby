// import React, { ChangeEvent, FC, forwardRef, useImperativeHandle } from "react";

import { ChangeEvent, forwardRef, useImperativeHandle } from 'react'
import styles from './Custom.module.css'

interface CustomInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
  disabled?: boolean
  className?: string
  inputRef?: React.RefObject<HTMLInputElement>
  style?: any
}

export interface CustomInputRef {
  focus: () => void
  clear: () => void
}

const CustomInput = forwardRef<CustomInputRef, CustomInputProps>(
  (
    {
      value,
      onChange,
      placeholder = '',
      label,
      disabled = false,
      className = '',
      inputRef,
      style = {},
    },
    ref
  ) => {
    useImperativeHandle(ref, () => ({
      focus: () => inputRef?.current?.focus(),
      clear: () => {
        if (inputRef?.current) inputRef.current.value = ''
      },
    }))

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value)
    }

    return (
      <div className={`${styles.inputContainer} ${className}`} style={style}>
        {label && <label className={styles.label}>{label}</label>}
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className={styles.input}
        />
      </div>
    )
  }
)

export default CustomInput
