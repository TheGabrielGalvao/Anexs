import { HtmlHTMLAttributes } from 'react'

import './styles.css'

export const Button: React.FC<HtmlHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
    return (
        <button {...props}>{children}</button>
    )
}