import { Button } from 'flowbite-react'
import React, { ComponentPropsWithoutRef } from 'react'
import './styles.css'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
  variant?: 'contained' | 'outlined'
  disabled?: boolean
}

export default function ButtonComponent({
  children,
  color = 'primary',
  variant = 'contained',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <Button
      className={`btn btn-${color} btn-${variant}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  )
}
