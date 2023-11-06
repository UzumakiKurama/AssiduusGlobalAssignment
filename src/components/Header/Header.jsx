import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profileImg from '../../assets/profile.jpg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './styles.css';

export default function Header() {
  return (
    <div className="header-main">
        <div className="header-searchInputWrapper">
            <SearchIcon />
            <input type="text" className='header-searchInput'/>
        </div>
        <div className="header-notification">
            <NotificationsIcon/>
        </div>
        <div className="header-profile">
            <img 
             src={profileImg}
             height="30px"
             width="30px"
             className='header-profileImage'
             alt='profile-image'/>
            <ArrowDropDownIcon/>
        </div>
    </div>
  )
}
