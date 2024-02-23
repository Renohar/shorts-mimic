import React from 'react'
import {useState,useEffect} from "react"
import videoList from "../videoList/list"
import VideoSingle from './VideoSingle'
import {useNavigate,useParams} from "react-router-dom"

const Video = () => {

    const Params = useParams()
    const ParamsId = Params.id
    const ParamsIdInt = parseInt(ParamsId, 10);
    
    
    
    
    const [index,setIndex] = useState(isNaN(ParamsIdInt) ? 0 : ParamsIdInt)

    
    const Navigate = useNavigate()
    
    

    const handleArrow = (e) => {
      if (e.keyCode === 38 && index === 1){
        setIndex((prev) => prev-1)
        Navigate("/")
      }
      else if (e.keyCode === 38 && index > 0){
          setIndex((prev) => prev-1)
          Navigate(`/${index-1}`)
      }
     
      else if (e.keyCode === 40 && index < videoList.length-1){
          setIndex((prev) => prev+1)
          Navigate(`/${index+1}`)
          
      }
  }

  useEffect(() => {
      window.addEventListener('keydown', handleArrow);
      return () => {
        window.removeEventListener('keydown', handleArrow);
      };
    }, [index]);


    return (
        <div className="scroll-outer"> 
         {
             videoList.map((list,i) =>
               ( i == index &&  <div className="scroll" key={i}>
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
