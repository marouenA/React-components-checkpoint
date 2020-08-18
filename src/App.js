import React from 'react';
import './App.css';
import ProfilePhoto from './profile/ProfilPhoto';
import Adress from './profile/adress';
import FullName from './profile/fullname';

function App() {
  return (
    <div className="App">
     <ProfilePhoto />
     
        <FullName/>
    <br/>
        <Adress/>
     
     
     
    </div>
  );
}

export default App;
