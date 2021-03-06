import React from 'react'
import {Avatar} from "@mui/material";

const NavList =({Icon ,avatar ,title})=>{
  return (
    <div className='headerOption'>
     {Icon && <Icon className="headerOption__icon" />}  
     {avatar && <Avatar className="headerOption__avatar" src={avatar}/>}
    <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default NavList