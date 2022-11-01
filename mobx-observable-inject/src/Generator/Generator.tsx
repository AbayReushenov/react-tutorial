import React from 'react'
import { action, observable } from 'mobx'
import {inject, observer, Provider } from "mobx-react"
import { generator } from './indexGenerator';
import Something from '../Something';
import {store} from '../stores/Store'

type Props = {
    store?: typeof store;
  }

@inject('store')
@observer
class Generator extends React.PureComponent<Props> {
    private _generator: globalThis.Generator<number, void, unknown> = generator
    
    @observable _state = {
        position: this._generator.next().value || 2,
    }
    

    componentDidUpdate(): void {
        this._positionUpdate()
    }

    render(){
        console.log(this.props.store!.shoesCount)
        return(
            <Provider state={this._state}>
               <Something />
            </Provider>
            )
    }

    @action _positionUpdate() {
        this._state.position = this._generator.next().value || 1
    }

}

export default Generator
