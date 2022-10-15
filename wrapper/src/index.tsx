import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Wrapper from './Wrapper/Wrapper'
import WrapperClassname from './WrapperClassname/WrapperClassname'
import './index.css'
import styles from './Styles/Styles.module.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Wrapper>
      <h1>One</h1>
      <App />
    </Wrapper>
    <WrapperClassname>
      <App />
    </WrapperClassname>
    <WrapperClassname className={styles.Classname}>
      <App />
    </WrapperClassname>
  </React.StrictMode>
)
reportWebVitals()
