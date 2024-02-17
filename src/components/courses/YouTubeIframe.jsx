import React, { useState } from 'react';  

function YouTubeIframe( {VideoId}  ) {
//   const [url, setUrl] = useState('');

  console.log(VideoId);
  return (VideoId && 
    <>
      {
        VideoId.includes('embed') ? 
        <iframe
          width="110%"
          height="400"
          src={VideoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> :<iframe
          width="110%"
          height="400"
          src={`https://www.youtube.com/embed/${VideoId.split("/").pop()}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      }
      
    </>
  );
}

export default YouTubeIframe;