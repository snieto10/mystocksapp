import React, { Component } from "react";
import "./table.css";

class Table extends Component {
  state = {};
  render() {
    const { stocks, onDelete } = this.props;
    return (
      <div className="blockcenter">
        <div className="block1">
          <table className="stock-list">
            <thead>
              <tr>
                <th>Stock</th>
                <th>Company Name</th>
                <th>Industry</th>
                <th>Qty</th>
                <th>Price</th>
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
