import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import MyNavBar from './components/MyNavBar';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './components/About';
import Contacts from './components/Contacts';
import { useEffect, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import MyFooter from './components/MyFooter';
import DownloadImageForm from './components/DownloadImageForm';
import DepartmentDetails from './components/DepartmentDetails';


function App() {
  const [token,setToken] = useState( localStorage.getItem("token") )

  return (
    <>

      <AuthContext.Provider value={token}>
        <BrowserRouter>
          <MyNavBar/>
            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
              <Route path='/download' element={<DownloadImageForm/>}/>
              <Route path='/department/:id' element={<DepartmentDetails/>}/>
            </Routes>
          <MyFooter/>
          </BrowserRouter>
      </AuthContext.Provider>

      {/* <button onClick={()=> console.log(token)}>button1</button>
      <button onClick={()=> localStorage.setItem("token","")}>button2</button> */}



    </>
  );
}

export default App;
