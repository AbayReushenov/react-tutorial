import React from 'react'
import { observer } from 'mobx-react'

type Props = {
	state: {
		count: number
		isNegative?: string
	}
	title: string
	className?: string
}

export const Counter: React.FC<Props> = observer(
	({ state, title, className }) => {
		return (
			<span className={className}>
				{title} {state.count}{' '}
				{state.isNegative ? `, Is negative? ${state.isNegative}` : null}
			</span>
		)
	}
)
