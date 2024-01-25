import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import useLoadingStore from '../../store/loadingStore';

function VerifyMagicLink() {
    const { token } = useParams();
	// const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isDataLoaded, setIsDataLoaded] = useState(false);
    const verifyMagicLink = useAuthStore(state => state.verifyMagicLink);   
	const isAuthenticated = useAuthStore(state => state.isAuthenticated);
	const screenLimitReached =useAuthStore(state => state.screenLimitReached);  
    const setLoading = useLoadingStore(state => state.setLoading);  
	useEffect(() => {
		if (screenLimitReached) navigate("/session/limit");
	}, [screenLimitReached, navigate]);
	useEffect(() => {
		if (isAuthenticated) navigate("/programs");
	}, [isAuthenticated, navigate]);
	useEffect(() => {
		setLoading(true);
		
		verifyMagicLink({ token: token, setIsDataLoaded: setIsDataLoaded })
		
        setLoading(false);

	}, []);

	useEffect(() => {
	  if(isDataLoaded==="The link you are using is invalid!"){
		navigate('/auth/magic-login')
	  }
	}, [isDataLoaded])
	

  return (
    <div style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', background: 'linear-gradient(to right, #5C258D, #4389A2)', color: 'white'}}>
  {!isDataLoaded ? (
    <>
      <div style={{fontSize: '1.875rem', margin: '1rem 0'}}>Verifying</div>
      <Link to="/programs" style={{padding: '1rem 2rem',backgroundColor:  "whitesmoke",color:"black", borderRadius: '0.5rem'}}> Home</Link>
    </>
  ) : isDataLoaded === "Link Expire" ? (
    <>
      <div style={{fontSize: '1.875rem', margin: '1rem 0'}}>The Link you are using is expired</div>
      <Link to="/auth/magic-login" style={{padding: '1rem 2rem',backgroundColor:  "whitesmoke",color:"black", borderRadius: '0.5rem'}}>Generate another</Link>
    </>
  ) : (
    <>
      <div style={{fontSize: '1.875rem', margin: '1rem 0'}}>An error Occurred! May be Link is Invalid</div>
      <Link to="/programs" style={{padding: '1rem 2rem', backgroundColor:  "whitesmoke",color:"black" , borderRadius: '0.5rem'}}>Home</Link>
    </>
  )}
</div>
  )
}

export default VerifyMagicLink