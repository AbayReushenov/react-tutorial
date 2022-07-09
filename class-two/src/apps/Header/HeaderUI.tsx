import React, { Component } from 'react';

interface Props{
  favoritecolor: string
}
export default class HeaderUI extends Component<Props> {
  render() {
    const favoritecolor = this.props.favoritecolor
    return <h1>My Favorite Color is {favoritecolor}</h1>;
  }
}
