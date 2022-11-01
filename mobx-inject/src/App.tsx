import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import {store} from './stores/Store';

type Props = {
    store?: typeof store;
  }

@inject('store')
@observer
class App extends Component<Props> {
	private shoeInput: React.RefObject<HTMLInputElement>
	constructor(props: Props) {
		super(props)
		this.shoeInput = React.createRef()
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

	render() {
		return (
			<div className='App'>
				<h1>My Shoes</h1>
				<h2>I have {this.props.store!.shoesCount} shoes</h2>

				<form
					onSubmit={(e) => {
						this.handleSubmit(e)
					}}
				>
					<input 
                        type='text'
                        ref={this.shoeInput} 
                    />
					<button type='submit'>Add Shoe</button>
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
}

export default App
