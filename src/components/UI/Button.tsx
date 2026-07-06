import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`
        bg-accent
        hover:bg-accent/90
        text-secondary
        flex
        w-full
        cursor-pointer
        items-center
        justify-center
        gap-2
        rounded-xl
        px-5
        py-3
        font-medium
        transition-all
        duration-300
        hover:scale-[1.02]
        active:scale-95
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export default Button