import React, { useState, useRef, useEffect } from 'react';
import { FaPlay,FaPause } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";



const VideoSingle = ({ i, title, video }) => {
    const videoRef = useRef(null);
    const [mute, setMute] = useState(true);
    const [play,setPlay] = useState(true)
    const [liked,setLiked] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setMute(false);
                videoRef.current.play()
            } else {
                setMute(true);
                videoRef.current.pause()
            }
            });
        }, { threshold: 0.4 });

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
                
            }
        };
    }, []); 

    const handlePlay = () => {
      if(play){
        videoRef.current.pause()
        setPlay(false)
      }
      else{
        videoRef.current.play()
        setPlay(true)
      }
    }

    const handleLike = () => {
      setLiked(true)
    }


    return (
        <div id={i}>
            
            <video onClick={() =>handlePlay()} loop={true}  ref={videoRef} muted={mute} src={video} alt={title} />
            <p>{title}</p>

            <div className="card-buttons">
                <button onClick={() => videoRef.current.play()}><FaPlay/></button>
                <button onClick={() => videoRef.current.pause()}><FaPause /></button>
                <button className={liked ? "red" : ""} onClick={() => handleLike()}><AiOutlineLike/></button>
            </div>
            
        </div>
    );
};

export default VideoSingle;
