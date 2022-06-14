import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';

import Navbar from './pages/navbar';
import DataProvider from "./provider/dataprovider"

/* kullanıcı olup olmadığı kontrol edilip home 
sayfası açılacak  */


function App() {
  return (
    <Router>
      <DataProvider>
        
        <Home/>
   


      </DataProvider>


    </Router>
  );
}

export default App;
