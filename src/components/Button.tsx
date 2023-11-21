import { CSSProperties, ReactNode } from 'react'

interface ButtonProps {
  className?: string
  children?: ReactNode
  style?: CSSProperties
}

export default function Button({
  className,
  children,
  style,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      style={style}
      className={`text-base font-medium px-[50px] shadow-md h-[73px] rounded-[37px] ${className}`}
    >
      {children}
    </button>
  )
}
