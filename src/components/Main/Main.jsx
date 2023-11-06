import AccountWatchList from "./AccountWatchlist/AccountWatchList";
import CheckingAccount from "./CheckingAccount/CheckingAccount";
import Invoices from "./Invoices/Invoices";
import TotalCash from "./TotalCash/TotalCash";
import './styles.css';

export default function Main() {
  return (
    <div style={{margin: '40px'}}>
      <div className="main-container">
          <CheckingAccount/>
          <Invoices/>
          <TotalCash/>
          <AccountWatchList/>
      </div>
    </div>
  )
}
