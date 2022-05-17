import React from 'react'
import '../../css/sideRight.css'
import { Avatar } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function SideRight() {
  return (
    <div className='sideRight'>
      
         <div className='sidright__top'>
         <h1 className='sideRight_h1'>Add To Your Feed </h1>
           <div className='sidright_flw'> 
               <div className='sidright_flw_top'>
                    <Avatar className="sidebar__avatar avtr" src="https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg"/>
                </div>

                <div className='sidright_flw_bottom'>
                    <h2 className='sidright_h2'>Oussama Algorithme</h2>
                    <h3 className='sidright_h3'>Software Enginnier </h3>
                    <button className='sidright_btn'>
                    <AddIcon color='primary'/>   
                    FOLLOW
                    </button>
                </div>
            </div> 

            <div className='sidright_flw'> 
               <div className='sidright_flw_top'>
                    <Avatar className="sidebar__avatar avtr" src="https://i.pinimg.com/474x/40/5c/18/405c18ab47a7b53c5212c725ac59c9a2.jpg"/>
                </div>

                <div className='sidright_flw_bottom'>
                    <h2 className='sidright_h2'>Walid Live</h2>
                    <h3 className='sidright_h3'>Ai Deep Learning </h3>
                    <button className='sidright_btn'>
                    <AddIcon color='primary'/>   
                    FOLLOW
                    </button>
                </div>
            </div> 

            <div className='sidright_flw'> 
               <div className='sidright_flw_top'>
                    <Avatar className="sidebar__avatar avtr" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSYy2jLdwgvS_4MhPQSZ_MwcGhUrFRVglnMBJYhiqAsDNUO3_P6nT6kC1ml0RsNZVpe0&usqp=CAU"/>
                </div>

                <div className='sidright_flw_bottom'>
                    <h2 className='sidright_h2'>Houcine Kazuha</h2>
                    <h3 className='sidright_h3'>Web Developer </h3>
                    <button className='sidright_btn'>
                    <AddIcon color='primary'/>     
                    FOLLOW
                    </button>
                </div>
            </div> 

            <div className='sidright_flw'> 
               <div className='sidright_flw_top'>
                    <Avatar className="sidebar__avatar avtr" src="https://th.bing.com/th/id/R.25d717bd48297743f5593b2218196db8?rik=fyFwfZfcOOBgDQ&riu=http%3a%2f%2fwww.thesporteasy.com%2fassets%2fuploads%2ffiles%2f87629-fb_img_1550404723793.jpg&ehk=d%2ftfAQMteFM%2bgOlC3vWmjrVx%2fR5H2n1IiiAPJXzvDN8%3d&risl=&pid=ImgRaw&r=0"/>
                </div>

                <div className='sidright_flw_bottom'>
                    <h2 className='sidright_h2'>Khalil Meziane</h2>
                    <h3 className='sidright_h3'>Front End Developer </h3>
                    <button className='sidright_btn'>
                    <AddIcon color='primary'/>   
                    FOLLOW
                    </button>
                </div>
            </div> 
        
        </div>

      <div className='chat'>
      <div className='sidright_chat'> 
               <div className='sidright_chat_top'>
                    <Avatar className="sidebar__avatar avtr chat_avtr" src="https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg"/>
                    <h2 className='react_h2'>Messaging</h2>
                </div>

                <div className='sidright_chat_bottom'>
                   
                    <h3 className='react_h2'><MoreHorizIcon/></h3>
                    <h4 className='react_h2'> <HistoryEduIcon/></h4>
                    <h5 className='react_h2'> <KeyboardArrowUpIcon/></h5>
                   
                </div>
            </div> 
      </div>
    </div>
  )
}

export default SideRight
