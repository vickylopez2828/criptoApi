import { ReactNode } from "react"

type ErrorMessageProps ={
    children: ReactNode
}
export default function ErrorMessage({children}:ErrorMessageProps) {
  return (
    <p className="error">
      {children}
    </p>
  )
}
