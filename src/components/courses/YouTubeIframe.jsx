import React, { useState } from 'react';  

function YouTubeIframe( {url}  ) {
//   const [url, setUrl] = useState('');



  const embedUrl = `https://www.youtube.com/embed/${url.split('v=')[1]}`;
    
  return (
    <div>
      
      {url && (
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default YouTubeIframe;