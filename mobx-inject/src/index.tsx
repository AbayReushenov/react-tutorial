import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'mobx-react'
import {store} from './stores/Store'
import App from './App'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)
