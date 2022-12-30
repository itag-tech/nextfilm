import { FC } from "react"
import clsx from "clsx"

const Header: FC = () => {
  return (
    <h1 className={clsx("text-center text-6xl")}>
      Nextflim
    </h1>
  )
}

export default Header