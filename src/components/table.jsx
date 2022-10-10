import React, { Component } from "react";
import "./table.css";

class Table extends Component {
  render() {
    const { stocks, onDelete, onSort } = this.props;
    return (
      <div className="blockcenter">
        <div className="block1">
          <table className="stock-list">
            <thead>
              <tr>
                <th onClick={() => onSort("stock")}>Stock</th>
                <th onClick={() => onSort("companyName")}>Company Name</th>
                <th onClick={() => onSort("industry")}>Industry</th>
                <th onClick={() => onSort("qty")}>Qty</th>
                <th onClick={() => onSort("price")}>Price</th>
                <th>Total Value</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock) => (
                <tr key={stock.stock}>
                  <td>{stock.stock}</td>
                  <td>{stock.companyName}</td>
                  <td>{stock.industry}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td>{stock.qty * stock.price}</td>
                  <td>
                    <button className="btn-red" onClick={() => onDelete(stock)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
