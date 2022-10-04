import React from "react";
import "./table.css";

const Table = () => {
  return (
    <div className="blockcenter">
      <div className="block1">
        <table className="stock-list">
          <tr>
            <th>Stock</th>
            <th>Company Name</th>
            <th>Industry</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total Value</th>
            <th></th>
          </tr>
          <tr>
            <td>Apple</td>
            <td>Apple Company</td>
            <td>Technology</td>
            <td>10</td>
            <td>$100</td>
            <td>$1100</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Table;
