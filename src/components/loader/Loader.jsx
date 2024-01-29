import React from "react";

import "./loader.css";
import { LoaderContainer, LoaderInnerContainer } from "../../styles/loader.styles";

const Loader = () => {
  return (
    <LoaderContainer className="loader-container">
      <LoaderInnerContainer
        className="loader"
        
      >

        <svg
          width="700"
          height="700"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="11.3662"
            y="7.35449"
            width="2.26769"
            height="24.094"
            rx="1.13385"
            fill="rgba(100, 34, 205, 0.7)"
          />
          <rect
            x="7.09766"
            y="13.8169"
            width="2.22857"
            height="24.9935"
            rx="1.11429"
            transform="rotate(-90 7.09766 13.8169)"
            fill="rgba(100, 34, 205, 0.7)"
          />
          <path
            d="M19.1467 18.6415C21.9579 15.8303 26.5213 15.8252 29.3304 18.6343C32.1549 21.4588 32.1318 26.0528 29.2833 28.8574C26.4866 31.6111 21.9939 31.6219 19.1923 28.8776C16.3335 26.0774 16.3149 21.4733 19.1467 18.6415Z"
            stroke="rgba(100, 34, 205, 0.7)"
            strokeWidth="1.82286"
          />
        </svg>
      </LoaderInnerContainer>
    </LoaderContainer>
  );
};

export default Loader;
