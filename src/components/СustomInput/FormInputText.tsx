// import React, { ChangeEvent, FC, forwardRef, useImperativeHandle } from "react";

import { forwardRef } from 'react'
import styles from './Custom.module.css'

interface CustomInputProps {
  placeholder?: string
  label?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

export interface CustomInputRef {
  focus: () => void
  clear: () => void
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      placeholder = '',
      label,
      disabled = false,
      className = '',
      style = {},
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`${styles.inputContainer} ${className}`} style={style}>
        {label && <label className={styles.label}>{label}</label>}
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          className={styles.input}
          {...rest}
        />
      </div>
    )
  }
)

export default CustomInput
