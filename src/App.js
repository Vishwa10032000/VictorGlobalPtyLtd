
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import RequestQuote from './pages/RequestQuote';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/aboutus' element={<AboutUs/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contactus' element={<ContactUs/>} />
      <Route path='/requestquote' element={<RequestQuote/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
