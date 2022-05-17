import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NavList from './nav_list';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';



const Navbar = () => {
  return (
    <div className='header'>
        <div className='nav-left'>
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>     
            <div className='search'>
                 <SearchIcon />
                 <input type="text"/>
            </div>
        </div>
        <div className='nav-right'> 
            < NavList  Icon={HomeIcon} title="Home" />
            < NavList  Icon={SupervisorAccountIcon} title="My network" />
            < NavList  Icon={BusinessCenterIcon} title="Jobs " />
            < NavList  Icon={ChatIcon} title="Chat" />
            < NavList  Icon={NotificationsIcon} title="Notifications" />
            < NavList  avatar="https://dthezntil550i.cloudfront.net/wv/latest/wv2102241214451460009569920/1280_960/7234c38e-9eec-4e90-8036-2fb69dcc96c0.png"  />
          
        </div>
    </div>
  )
}

export default Navbar;