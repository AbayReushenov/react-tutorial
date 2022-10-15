import React, {  Component } from 'react'
import classnames from "classnames";
import style from './Wrapper.module.css'

interface Props {
  children: React.ReactNode
  className?: string
}
export default class Wrapper extends Component<Props> {
  render() {
    return (
      <div className={classnames(style.Wrapper, this._className)}>{this._children}</div>
    )
  }
  get _className(){
    return this.props.className
  }
  get _children(){
    return this.props.children
  }
}

