import React, { HTMLAttributes, PropsWithChildren, useMemo } from "react"
import cx from "classnames"

import "./Button.scss"

type Props = PropsWithChildren<{
  size: "small" | "medium" | "large"
}> & HTMLAttributes<HTMLButtonElement>

const Button = ({ size, children, onClick }: Props) => {
  return (
    <button className={cx(["button", size])} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button