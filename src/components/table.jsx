import React, { Component } from "react";
import "./table.css";

class Table extends Component {
  state = {
    tableTitles: [
      "Stock",
      "Company Name",
      "Industry",
      "Qty",
      "Price",
      "Total Value",
      "",
    ],
  };
  render() {
    const { stocks, onDelete, onSort } = this.props;
    return (
      <div className="blockcenter">
        <div className="block1">
          <table className="stock-list">
            <thead>
              <tr>
                {this.state.tableTitles.map((t) => (
                  <th key={t} onClick={() => onSort(t)}>
                    {t}
                  </th>
                ))}
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
