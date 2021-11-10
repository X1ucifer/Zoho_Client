import * as React from 'react';
import Header from "./components/header"
import SignIn from "./components/login"
import SignUp from "./components/register"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>

      <Router>

          <Header />
          <Routes>

            <Route path="/signup" element={<SignUp />}/>
            <Route path="/" element={<SignIn />}/>

            
          </Routes>


      </Router>

    </>

  );
}

export default App;
