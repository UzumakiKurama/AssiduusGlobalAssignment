import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import "./styles.css"
import { useState } from 'react';

export default function SideBarMenu() {

    const [selected, setSelected] = useState({
        Dashboard: true, 
        Accounts: false, 
        Payroll:false, 
        Reports:false, 
        Advisor:false, 
        Contacts: false
    });
    
    const clickHandler = (event) => {
        let updatedState = {...selected};
        Object.keys(updatedState).map( key => updatedState[key] = false);

        setSelected({...updatedState, [event.target.textContent] : true} )
    }

  return (
    <ul className='sideBar-menu'>
        <li className={`sideBar-menuItem ${selected.Dashboard ? "selected" : ''}`} onClick={clickHandler}>
            <DashboardIcon/>
            <span className='sideBar-menuItem-label'>Dashboard</span>
        </li>
        <li className={`sideBar-menuItem ${selected.Accounts ? "selected" : ''}`} onClick={clickHandler}>
            <AccountBalanceWalletIcon/>
            <span className='sideBar-menuItem-label'>Accounts</span>
        </li>
        <li className={`sideBar-menuItem ${selected.Payroll ? "selected" : ''}`} onClick={clickHandler}>
            <AttachMoneyIcon/>
            <span className='sideBar-menuItem-label'>Payroll</span>
        </li>
        <li className={`sideBar-menuItem ${selected.Reports ? "selected" : ''}`} onClick={clickHandler}>
            <DescriptionIcon/>
            <span className='sideBar-menuItem-label'>Reports</span>
        </li>
        <li className={`sideBar-menuItem ${selected.Advisor ? "selected" : ''}`} onClick={clickHandler}>
            <PersonIcon/>
            <span className='sideBar-menuItem-label'>Advisor</span>
        </li>
        <li className={`sideBar-menuItem ${selected.Contacts ? "selected" : ''}`} onClick={clickHandler}>
            <ContactsIcon/>
            <span className='sideBar-menuItem-label'>Contacts</span>
        </li>
    </ul>
  )
}
