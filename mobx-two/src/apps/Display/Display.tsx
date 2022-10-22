import React from 'react'
import { Counter } from './Counter'

type Props = {
	store: {
		count: number
		isNegative: string
	}
}

export const Display: React.FC<Props> = ({ store }) => {
	return (
		<div className='counter'>
			<div className='header'>
				<h1>
					<Counter
						className={'blue'}
						title={'STATE: '}
						state={store}
					/>{' '}
				</h1>
			</div>
		</div>
	)
}
