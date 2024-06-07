// loggedIn.jsx
import React, { useState } from 'react';
import LoggedIn from './loggedIn';

const LandingPage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const goToLoggedInPage = () => {
    setIsSignedIn(true);
  };

  if (isSignedIn) {
    return <LoggedIn />;
  }
  return (
    <>
    <div style={{ background: 'url(../public/images/image.png) no-repeat', backgroundSize:'cover',border:'transparent',borderRadius:'20px' , padding:'50px'}}>
    <h1>Welcome to Landing Page!</h1>
    <button onClick={goToLoggedInPage}>Sign Out</button>
    </div>
    </>
  );
};

export default LandingPage;
