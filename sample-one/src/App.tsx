import React from 'react';
import { SearchBar } from './components/SearchBar';
import { ProductTable } from './components/ProductTable';
import { Iproduct } from './data/IProduct';
import './App.css'

interface Props {
  products:Iproduct[];
}
interface State {
  filterText: string,
  inStockOnly: boolean,
}
export class App extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText: string) {
    this.setState({
      filterText: filterText,
    });
  }

  handleInStockChange(inStockOnly: boolean) {
    this.setState({
      inStockOnly: inStockOnly,
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
          />
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      </div>
    );
  }
}
