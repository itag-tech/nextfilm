import { FC } from "react"
import clsx from "clsx"
import Header from "./Header"

type PrivateProps = {
  children?: React.ReactNode
  className?: string
}

const Layout: FC<PrivateProps> = ({ children, className }) => {
  return (
    <div className={clsx("min-h-screen max-w-full overflow-x-hidden", className)}>
      <div className="container mx-auto my-24">
        <Header />
        <main role="main">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout