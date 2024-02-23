import React, { useState, useRef, useEffect } from 'react';
import { FaPlay,FaPause } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";



const VideoSingle = ({ i, title, video }) => {
    const videoRef = useRef(null);
    const [mute, setMute] = useState(true);
    const [play,setPlay] = useState(true)
    const [liked,setLiked] = useState(false)
    const [progress, setProgress] = useState(0);

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

    useEffect(() => {
      const updateProgress = () => {
          const duration = videoRef.current.duration;
          const currentTime = videoRef.current.currentTime;
          const progress = (currentTime / duration) * 100;
          setProgress(progress);
      };

      videoRef.current.addEventListener('timeupdate', updateProgress);

      return () => {
          videoRef.current.removeEventListener('timeupdate', updateProgress);
      };
  }, []);

  const playButton = () => {
      videoRef.current.play()
      setPlay(true)
  }

  const pauseButton = () => {
    videoRef.current.pause()
    setPlay(false)
}


    return (
        <div id={i}>
            
            <video onClick={() =>handlePlay()} loop={true}  ref={videoRef} muted={mute} src={video} alt={title} />

            <div  className="progress-bar" style={{ width: `${progress}%` }}></div>

            <p>{title}</p>

            <div className="card-buttons">
                <button disabled={play? true : false}  onClick={() => playButton()}><FaPlay/></button>
                <button disabled={play? false : true}  onClick={() => pauseButton()}><FaPause /></button>
                <button className={liked ? "red" : ""} onClick={() => handleLike()}><AiOutlineLike/></button>
            </div>

        </div>
    );
};

export default VideoSingle;
