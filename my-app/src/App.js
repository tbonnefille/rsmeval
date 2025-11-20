
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router";

import Header from './Components/Header/Header'
import Home from './Containers/Home/Home';
import Ressources from './Containers/Ressources/Ressources';
import Notifications from './Containers/Notifications/Notifications';
import Events from './Containers/Events/Events';
import Footer from './Components/Footer/Footer';




function App() {


  return (



    <BrowserRouter>

<Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/ressources" element={<Ressources />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/events" element={<Events />} />
      </Routes>

<Footer />

    </BrowserRouter>

  );
}

export default App;
