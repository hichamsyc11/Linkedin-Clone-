import React from 'react'
import '../../css/home.css'
import { Avatar } from '@mui/material'
import PhotoIcon from '@mui/icons-material/Photo';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
function Home() {
  return (
    <div className='home'>
       <div className='new_post'>

         <div className='new_post_top'>
            <Avatar className="sidebar__avatar avtr" src="https://dthezntil550i.cloudfront.net/wv/latest/wv2102241214451460009569920/1280_960/7234c38e-9eec-4e90-8036-2fb69dcc96c0.png"/>
            <button className='new_post_btn'>
            <span className='new_post_span'>Create NEw Post </span>      
            </button>  
         </div>
         <div className='new_post_bottom'>
             <button className='new_post_bottom_btn'> 
                <PhotoIcon color='primary' fontSize='large' />
                <p>photo </p>
             </button>

             <button className='new_post_bottom_btn'> 
                <SlowMotionVideoIcon color='success' fontSize='large' />
                <p>vidéo </p>
             </button>

             <button className='new_post_bottom_btn'> 
                <EventIcon color='warning'fontSize='large'  />
                <p>Events </p>
             </button>

             <button className='new_post_bottom_btn'> 
                <ArticleIcon color='secondary' fontSize='large' />
                <p>Create Article  </p>
             </button>
            
         </div>

       </div>
    </div>
  )
}

export default Home;