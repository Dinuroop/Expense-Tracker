
import './App.css';
import Form from './components/Form';
import Graph from './components/Graph';
import LoginPage from './pages/LoginPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Switcher from './Switcher';
import Main from './pages/Main';
import Analysis from './pages/Analysis';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <div class="">
      <div className="mx-auto w-[100vw] min-w-fit  bg-white min-h-[100vh] dark:bg-black text-center drop-shadow-lg text-gray-800">
      <Navbar/>
      {/* <nav className="text-4xl py-4 mb-10 bg-slate-500 text-white rounded" style={{display:"flex",flexDirection:"row"}}>
      <h1 className='ml-4 dark:text-black'>Expense Tracker</h1>
      <div className='ml-auto mr-4'>
      <Switcher/>
      </div>
      </nav> */}
      <div className='h-full mt-8'>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/main" element={<Main/>}/>
            <Route path="/analysis" element={<Analysis/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
    </div>
  </>
    
  );
}

export default App;
