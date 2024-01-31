import { useEffect } from "react";

const useScript = url => {
    useEffect(() => {
      const script = document.createElement('script');
      script.type = 'text/javascript';  
      const scriptText = document.createTextNode(`<script type="text/javascript">
      const currentUrl = window.location.href;
      if (!(currentUrl.includes("/auth")   )   ) {
        (function(w, d, s, u) {
          w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
          var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
          j.async = true; j.src = 'https://codetown.in/livechat/rocketchat-livechat.min.js?_=201903270000';
          h.parentNode.insertBefore(j, h);
        })(window, document, 'script', 'https://codetown.in/livechat');

      }
      </script>`)
      script.src = url ;
      script.async = true;

      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      }
    }, [url]);
  };