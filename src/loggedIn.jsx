// loggedIn.jsx
import React, { useState } from 'react';
import LandingPage from './landingPage';
import './loggedIn.css'

const LoggedIn = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const goToLandingPage = () => {
    setIsSignedIn(true);
  };

  if (isSignedIn) {
    return <LandingPage />;
  }

  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
     integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
      <div id='container'>
        <h1 style={{marginBottom:30}}>Sign in to your account</h1>
        <div class="form-floating mb-3">
          <input type="name" class="form-control" id="floatingInput" placeholder="Enter Name" required/>
          <label for="floatingInput">User Name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required/>
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>
        <button onClick={goToLandingPage}>Sign In</button>
      </div>
      
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
     integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
     crossorigin="anonymous"></script>
    </>
  );
};

export default LoggedIn;
