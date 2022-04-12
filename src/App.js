import { Route, Routes } from 'react-router-dom';
import './Global.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
