import React from 'react';

interface Props {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (filterText: string) => void;
  onInStockChange: (inStockOnly: boolean) => void;
}

export class SearchBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e: React.FormEvent<HTMLInputElement>) {
    this.props.onFilterTextChange(e.currentTarget.value);
  }

  handleInStockChange(e:React.FormEvent<HTMLInputElement>) {
    this.props.onInStockChange(e.currentTarget.checked);
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Search...'
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type='checkbox'
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />{' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
