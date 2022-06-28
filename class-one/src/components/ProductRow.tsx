import React from 'react';
import { Iproduct } from '../data/IProduct';

type Props = {
  product: Iproduct
}
export class ProductRow extends React.Component<Props> {
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: 'red' }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}
