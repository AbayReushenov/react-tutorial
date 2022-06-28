import React from 'react';
import { Iproduct } from '../data/IProduct';
import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';

type Props = {
  filterText: string;
  inStockOnly: boolean;
  products: Array<Iproduct>;
};

export class ProductTable extends React.Component<Props> {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows: Array<JSX.Element> = [];
    let lastCategory: string | null = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
