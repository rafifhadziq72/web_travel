import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
