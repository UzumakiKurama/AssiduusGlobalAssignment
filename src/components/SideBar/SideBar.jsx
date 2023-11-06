import logo from '../../assets/logo.jpg';
import SideBarMenu from './SideBarMenu';

import "./styles.css";

export default function SideBar() {
  return (
    <div className='sideBar-main'>
        <div className="sideBar-logoWrapper">
            <img 
                src={logo} 
                alt="assiduus-logo"
                className='sideBar-logo' />
        </div>
        <div className="sideBar-menuWrapper">
            <SideBarMenu/>
        </div>
    </div>
  )
}
