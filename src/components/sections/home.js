import React from 'react'
import '../../css/home.css'
import { Avatar } from '@mui/material'
import PhotoIcon from '@mui/icons-material/Photo';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import Model from './model';


function Home() {
 
   return (
     
   <div className='homePage'>
       <div className='home'>
       <div className='new_post'>

         <div className='new_post_top'>
            <Avatar className="sidebar__avatar avtr" src="https://dthezntil550i.cloudfront.net/wv/latest/wv2102241214451460009569920/1280_960/7234c38e-9eec-4e90-8036-2fb69dcc96c0.png"/>
            <Model />
        
        
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
      
     <div className='post'>
     <button className='post_btn'> <MoreHorizIcon/> </button>
     <div className='home_post '> 
               <div className='home_post_avatar '>
                    <Avatar className="sidebar__avatar avtr" src="https://statt.cc/wp-content/uploads/2020/02/8696-1.jpg"/>
                </div>

                <div className='home_post_person '>
                    <h2 className='post_name_h2'>Khaoula Merhab</h2>
                    <h3 className='post_skill_h3'>Front End Developer <PublicIcon className='pub' /> </h3>
                </div>
              
      </div> 
      <div className='home_post_new'>
            <div className='home_post_new_top'>
              <p className='home_post_para'>
              يقول مصطفى محمود ؛
               <br/> ..لا تحزن عند الصدمات 
               <br/> ..فلولاها لبقينا مخدوعين لمدة طويلة
               <br/>  .هي قاسية 
              ..لكنها صادقة 

                </p>
            </div> 

            <div className='home_post_new_bottom'>
               <div className='home_post_react'>
                  <h2 className='react_h2 post_skill_h3'>
                  <FavoriteBorderIcon color='error' fontSize='small' />
                     198
                  </h2>
                  <h3 className='react_h3 post_skill_h3'>
                     <span className='react_h3'>12 Comment</span>
                     <span>2 Shares</span>
                  </h3>
                 
               </div>

              <div className='bor new_post_bottom'>

                     <button className='new_post_bottom_btn'> 
                        <FavoriteBorderIcon color='error' fontSize='large' />
                        <p>Like </p>
                     </button>

                     <button className='new_post_bottom_btn'> 
                        <CommentIcon  color='action' fontSize='large' />
                        <p>Comment</p>
                     </button>

                     <button className='new_post_bottom_btn'> 
                        <ShareIcon color='warning'fontSize='large'  />
                        <p>Share </p>
                     </button>

                     <button className='new_post_bottom_btn'> 
                        <SendIcon  color='info' fontSize='large' />
                        <p>Send </p>
                     </button>
            
         </div>

            </div> 
      </div>


     </div>



     <div className='post'>
     <button className='post_btn'> <MoreHorizIcon/> </button>
     <div className='home_post '> 
               <div className='home_post_avatar '>
                    <Avatar className="sidebar__avatar avtr" src="https://th.bing.com/th/id/OIP.Y6TnuuB0AlC6hdPy2xnZuwHaEK?pid=ImgDet&rs=1"/>
                </div>

                <div className='home_post_person '>
                    <h2 className='post_name_h2'>ساعد محمد</h2>
                    <h3 className='post_skill_h3'><PublicIcon className='pub' /> حاب نتزوج برك  </h3>
                </div>
              
      </div> 
      <div className='home_post_new'>
            <div className='home_post_new_top'>
              <p className='home_post_para'>
              .الحب كالأنف الأحمر، لا يستطيع صاحبه أن يحجبه عن الأنظار
                </p>
            </div> 

            <div className='home_post_new_bottom'>
               <div className='home_post_react'>
                  <h2 className='react_h2 post_skill_h3'>
                  <FavoriteBorderIcon color='error' fontSize='small' />
                     20
                  </h2>
                  <h3 className='react_h3 post_skill_h3'>
                     <span className='react_h3'>13 Comment</span>
                     <span>1 Shares</span>
                  </h3>
                 
               </div>

              <div className='bor new_post_bottom'>

                     <button className='new_post_bottom_btn'> 
                        <FavoriteBorderIcon color='error' fontSize='large' />
                        <p>Like </p>
                     </button>

                     <button className='new_post_bottom_btn'> 
                        <CommentIcon  color='action' fontSize='large' />
                        <p>Comment</p>
                     </button>

                     <button className='new_post_bottom_btn'> 
                        <ShareIcon color='warning'fontSize='large'  />
                        <p>Share </p>
                     </button>

                     <button className='new_post_bottom_btn'> 
                        <SendIcon  color='info' fontSize='large' />
                        <p>Send </p>
                     </button>
            
         </div>

            </div> 
      </div>


     </div>
   </div>
  )
}

export default Home;