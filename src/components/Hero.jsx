import React, { useState, useRef} from 'react'

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadeVideos, setLoadeVideos] = useState(0);

  const  totalVideos = 4;
  const nextVideoRef = useRef(null)

  const handleVideoLoad = () => {
    setLoadeVideos((prev) => prev +1);
  }

  const handleMiniVdClick =() =>{
    setHasClicked(true);

    setCurrentIndex((prevIndex) => prevIndex +1 )

  }

  const getVideosrc = (index) => `videos/hero-${index}.mp4`

  return (
    <div className='relative h-dvh w-screen overflow-hidden'>
      <div id='video-frame' className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div>
          <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
            <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 '>
              <video 
                ref={nextVideoRef}
                src={getVideosrc(currentIndex+1)}
                loop
                muted
                id='current-video'
                className='size-64 origin-center scale-150 object-cover object-center' 
              />
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero