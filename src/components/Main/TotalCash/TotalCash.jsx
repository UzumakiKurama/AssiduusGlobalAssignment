import StackedBar from "./StackedBar";
import "./styles.css";

export default function TotalCash() {
  return (
    <div className="totalCash-main">
      <div className="totalCash-header">
        <h2 className="totalCash-label">Total cash flow</h2>
        <div className="totalCash-info">
          <div className="totalCash-in"></div><span>In</span>
          <div className="totalCash-out"></div><span>Out</span>
        </div>
      </div>
      <hr></hr>
      <div className="totalCash-stackedBar">
        <StackedBar width="600" height="200"/>
      </div>
    </div>
  )
}
