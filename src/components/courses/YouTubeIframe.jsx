import React, { useState } from 'react';  

function YouTubeIframe( {VideoId}  ) {
//   const [url, setUrl] = useState('');


  const embedUrl = `https://www.youtube.com/embed/${VideoId.split('v=')[1]}`;
  return (
    <>
      
      {VideoId && (
        <iframe
          width="100%"
          height="415"
          src={VideoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
}

export default YouTubeIframe;