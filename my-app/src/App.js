
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './Containers/Home/Home';
/*import Ressources from './Containers/Ressources/Ressources';
import Notifications from './Containers/Notifications/Notifications';
import Events from './Containers/Events/Events';*/

/*
<Route path="/ressources" element={<Ressources />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/events" element={<Events />} />

<div className='app'>
*/



function App() {


  return (



   <BrowserRouter>


      <Routes>

        <Route path="/" element={<Home />} />
       
      </Routes>

   
</BrowserRouter>

  );
}

export default App;
