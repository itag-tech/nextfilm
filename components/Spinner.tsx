import { FC } from "react"
import ReactSpinner from "react-svg-spinner"
import clsx from "clsx"

export type SpinnerProps = {
	color: string
	size: string
	ariaLabel?: string
}

export const Spinner: FC<SpinnerProps> = ({ color, size, ariaLabel = "Waiting loader" }) => {
	return (
		<div className={clsx("flex flex-col justify-center items-center w-full m-12 ")}>
			<span className={clsx("sr-only")}>{ariaLabel}</span>
			<ReactSpinner color={color} size={size} />
		</div>
	)
}
