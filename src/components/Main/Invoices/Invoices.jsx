import "./styles.css";
import BarChart from "./BarChart";
import { useRef } from "react";

export default function Invoices() {

  const hiddenFileInput = useRef(null);
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
  }

  const handleClick = () => {
    hiddenFileInput.current.click();
  }

  return (
    <div className="invoice-main">
      <div className="invoice-header">
        <h2 className="invoice-label">Invoices owed to you</h2>
        <div className="invoice-btn" onClick={handleClick}>New Sales Invoice</div>
        <input type="file"
              onChange={handleChange}
              ref={hiddenFileInput}
              style={{display: 'none'}}
              />
      </div>
      <hr></hr>
      <div style={{textAlign: 'center', marginTop: "30px"}}>
          <BarChart width="600" height="200"/>
      </div>
    </div>
  )
}
