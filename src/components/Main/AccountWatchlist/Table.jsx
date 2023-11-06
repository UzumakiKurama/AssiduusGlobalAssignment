import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function Table() {
    const [data, setData] = useState([
        ["Sales", 1194.58, 11418.29],
        ["Advertising", 6874.58, 42418.29],
        ["Inventory", 89374.58, 1138.29],
        ["Entertainment", 1234.58, 1438.29],
        ["Product", 4652.10, 2529.29]
    ]);

  return (
    <div className="table-main">
        <table className="table">
            <thead className="table-head">
                <tr className="table-row">
                    <th>Accounts</th>
                    <th>This Month</th>
                    <th>YTD</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {
                    data.map( (row, id) => (
                        <tr className="table-row" key={id}>
                            <td className="table-col1"> {row[0]} </td>
                            <td> {row[1]} </td>
                            <td> {row[2]} </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
