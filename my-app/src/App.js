
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router";

import Header from './Components/Header/Header'

import Ressources from './Containers/Ressources/Ressources';
import Notifications from './Containers/Notifications/Notifications';
import Events from './Containers/Events/Events';





function App() {


  return (



    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Ressources />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/events" element={<Events />} />
        
      </Routes>



    </BrowserRouter>

  );
}

export default App;
