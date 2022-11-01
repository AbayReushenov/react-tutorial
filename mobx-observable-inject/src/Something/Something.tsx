import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import {store} from '../stores/Store'

type Props = {
    store?: typeof store;
    state?: { position: number }
  }

@inject('store', 'state')
@observer
class Something extends Component<Props> {
	private shoeInput: React.RefObject<HTMLInputElement>
	constructor(props: Props) {
		super(props)
		this.shoeInput = React.createRef()
	}
    
	render() {
        return (
            <div className='App'>
				<h1>Очень странный генератор</h1>
                <h4>Состояние генератора: {this.props.state?.position as unknown as number} </h4>
				<h2>У меня сейчас {this.props.store!.shoesCount} наименований списка</h2>

				<form
					onSubmit={(e) => {
						this.handleSubmit(e)
					}}
                    >
					<input 
                        type='text'
                        ref={this.shoeInput} 
                    />
					<button type='submit'>Добавить пункт</button>
				</form>

				<ul>
					{this.props.store!.shoes.map(
                        (shoe: string, index: number) => {
							return <li key={index}>{shoe}</li>
						}
                        )}
				</ul>
			</div>
		)
	}

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (this.shoeInput.current){
            console.log(this.shoeInput.current.value)
            const shoe = this.shoeInput.current.value
    
            this.props.store!.addShoe(shoe)
            this.shoeInput.current.value = ''
        }
    }
}

export default Something
