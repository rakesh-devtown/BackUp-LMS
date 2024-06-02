import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import useLoadingStore from "../../store/loadingStore";
import {
  VerifyMagicLinkButton,
  VerifyMagicLinkContainer,
  VerifyMagicLinkText,
} from "../../styles/magicLink.styles";

function VerifyMagicLink() {
  const { token } = useParams();
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const verifyMagicLink = useAuthStore((state) => state.verifyMagicLink);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const screenLimitReached = useAuthStore((state) => state.screenLimitReached);
  const setLoading = useLoadingStore((state) => state.setLoading);
  useEffect(() => {
    if (screenLimitReached) navigate("/session/limit");
  }, [screenLimitReached, navigate]);
  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);
  useEffect(() => {
    setLoading(true);

    if(token!=null)
    {
        console.log("loading")
        verifyMagicLink({ token: token, setIsDataLoaded: setIsDataLoaded });
    }

    setLoading(false);
  }, [token]);

  useEffect(() => {
    if (isDataLoaded === "The link you are using is invalid!") {
      navigate("/auth/magic-login");
    }
  }, [isDataLoaded]);

  return (
    <VerifyMagicLinkContainer>
      {!isDataLoaded ? (
        <>
          <VerifyMagicLinkText>Verifying</VerifyMagicLinkText>
          <VerifyMagicLinkButton to="/">Home</VerifyMagicLinkButton>
        </>
      ) : isDataLoaded === "Link Expire" ? (
        <>
          <VerifyMagicLinkText>
            The Link you are using is expired
          </VerifyMagicLinkText>
          <VerifyMagicLinkButton to="/auth/magic-login">
            Generate another
          </VerifyMagicLinkButton>
        </>
      ) : (
        <>
          <VerifyMagicLinkText>
            An error Occurred! May be Link is Invalid
          </VerifyMagicLinkText>
          <VerifyMagicLinkButton to="/">Home</VerifyMagicLinkButton>
        </>
      )}
    </VerifyMagicLinkContainer>
  );
}

export default VerifyMagicLink;
