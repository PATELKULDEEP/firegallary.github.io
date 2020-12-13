import React, {useState} from 'react';
import Home from './components/home'
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import { BrowserRouter as Router,  Route } from "react-router-dom";
// import {AuthProvider} from './contexts/AuthContext';
// import PrivateRoute from "./PrivateRoute";
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Admin from './components/admin/Admin';
// import Profile from './components/profile/Profile';

function App() {

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <React.Fragment>
      <Router>
      {/* <AuthProvider> */}
        {/* <Switch> */}
          <Route exact path="/login" component={Login} />
          {/* <PrivateRoute exact path='/profile' component={Profile} /> */}
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/admin' component={Admin} />
          
          <div className="App">
          <Title/>
      <Home/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
          </div>

        {/* </Switch> */}
      {/* </AuthProvider> */}
      </Router>


    </React.Fragment>

  );
}

export default App;
