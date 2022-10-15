import React from 'react'
import logo from './logo.svg'
import './App.css'

interface Props {}

class App extends React.Component<Props> {
  private _contentDiv: React.RefObject<HTMLDivElement>

  constructor(props: Props) {
    super(props)
    this._contentDiv = React.createRef()
  }
  render(): React.ReactNode {
    return (
      <div className='App'>
        <div className='line'></div>{' '}
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <div className='target'>
            <div className='item'>
              <div
                className='hello'
                ref={this._contentDiv}
                onMouseMove={(e) => {
                  if (this._contentDiv.current !== null)
                    console.log(
                      e.target,
                      this._contentDiv.current.offsetTop,
                      this._contentDiv.current.offsetLeft,
                      this._contentDiv.current.clientHeight,
                      this._contentDiv.current.clientWidth,
                      this._contentDiv.current.clientTop,
                      this._contentDiv.current.clientLeft,
                      this._contentDiv.current.offsetHeight,
                      this._contentDiv.current.offsetWidth,
                      this._contentDiv.current.offsetParent,
                      this._contentDiv.current.getBoundingClientRect().x,
                      this._contentDiv.current.getBoundingClientRect().y
                    )
                }}
              >
                Hello. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maxime beatae aut nihil fuga perspiciatis! Est quo doloribus
                animi libero illo id sequi pariatur, itaque soluta ab suscipit
                enim sunt quas!
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default App
