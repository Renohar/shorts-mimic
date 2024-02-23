import React from 'react'
import videoList from "../videoList/list"
import VideoSingle from './VideoSingle'

const Video = () => {

    return (
        <div className="scroll-box"> 
         {
             videoList.map((list,i) =>
               (<div className="scroll-card" key={i}>
                    <VideoSingle 
                      i={i} 
                      title={list.title} 
                      video={list.video}
                      /> 
                  </div>
                ) 
              )
         }
            
        </div>
    )
}

export default Video
