import React, { useState } from 'react';  

function YouTubeIframe( {VideoId}  ) {
//   const [url, setUrl] = useState('');


  console.log(VideoId);
  const embedUrl = `https://www.youtube.com/embed/${VideoId.split('v=')[1]}`;
    console.log(embedUrl);
  return (
    <>
      
      {VideoId && (
        <iframe
          width="520"
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