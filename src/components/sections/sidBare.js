import React from 'react'
import '../../css/sidebare.css'
import { Avatar } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
const SidBare = ()=> {
    const recentTopic = (topic)=>(
        <div className="recent">
             <p># {topic}</p>  
        </div>
    )
  return (
    <div className='sidbare'>
        <div className='sidbare__top'>
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFbbEQjyAVBafMBUa8KWH0RyCWskTedcwd6g&usqp=CAU' className="img" alt='background'/> 
             <Avatar className="sidebar__avatar" src="https://dthezntil550i.cloudfront.net/wv/latest/wv2102241214451460009569920/1280_960/7234c38e-9eec-4e90-8036-2fb69dcc96c0.png"/>
             <h2>Hicham Hll</h2>
             <h3>Node Js Developper </h3>
            
            <div className='sidebare_event'> 
                <h4>  events : </h4>
                
                <div className='events'>
                    <p> 100 Days for coding </p>  
                </div>

                <div className='events'>
                    <p>Node Js Lover </p>  
                </div>

                <div className='events'>
                    <p>React js Team</p>  
                </div>  
            </div> 
          
        </div>

        <div className='sidbare__bottom'>
        <h4> Recent : </h4>
        <div className='bottom_recent'>
           
            {recentTopic('Last msg')}
            {recentTopic('New Jobs')}
            {recentTopic('Last msg')}
         
            <AddCircleIcon className='side_icone'/>
        </div>
            
            
        </div>


    </div>

  )
}

export default SidBare