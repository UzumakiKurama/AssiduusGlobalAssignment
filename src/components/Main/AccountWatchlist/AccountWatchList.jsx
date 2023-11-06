import Table from './Table';
import './styles.css';

export default function AccountWatchList() {
  return (
    <div className='account-main'>
      <div className='account-header'>
        <h2 className='account-label'>Account watchlist</h2>
      </div>
      <hr></hr>
      <div className='account-table'>
        <Table />
      </div>
    </div>
  )
}
