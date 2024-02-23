import React from 'react'
import {useState,useRef,useEffect} from "react"

const VideoSingle = ({i,title,video}) => {
    const videoRef = useRef(null)

    const [play,setPlay] = useState(false)

    const handlePlay = () => {
        if (play) {
          setPlay(false);
          videoRef.current.pause();
        } else {
          videoRef.current.play();
          setPlay((play) => !play);
        }
      };

   

      

      
  
  
    

    return (
        <div id ={i}>
            <p>{title}</p>
            <video onClick={handlePlay} autoPlay ref={videoRef} src={video} alt={title}/>
            <div>
                <button onClick={() =>setPlay(true)}>Play</button>
                <button>Pause</button>
            </div>
           
        </div>
    )
}

export default VideoSingle
