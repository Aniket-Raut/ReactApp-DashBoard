import logo from './logo.svg';
import './App.css';
import { DashBoard } from './pages/DashBoard';
import {BrowserRouter, Routes,Route,useNavigate, Router} from "react-router-dom";
import { Login } from './pages/Login';
import { Add } from './pages/Add';
import { NavBar } from './components/NavBar';
import { DashCard } from './components/DashCard';
import { Card2 } from './components/Card2';
import { Form1 } from './components/Form1';
import { Temp } from './components/Temp';
import { FormTable } from './components/forms/FormTable';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <div className="top-cnt">
                <NavBar uimg="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80"></NavBar>
        </div>

        <div className="main-cnt">
          <div className="col1">
            <DashCard uimg="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80" uname="Aniket Raut" dsg="Developer" 
              loc="Nagpur" dob="29-Sep-1999"></DashCard>
            <Card2 i1="Temp value 1" i2="Temp value 2" i3="Temp value 3"></Card2>
          </div>

          <div className="col2">
            <Routes>
              {/* <Route exact path='/' element={<Temp/>}></Route> */}
              <Route index exact path='/addUser' element={<Form1/>}></Route>
              <Route exact path='/add' element={<Temp/>}></Route>
              <Route exact path='/login1' element={<Login/>}></Route>
              <Route exact path='/table' element={<FormTable/>}></Route>
            </Routes>
          </div>
        </div>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
