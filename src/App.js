import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import i18n from './config/i18n';


function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/home' Component={Home} />
          <Route path='/' Component={Home} />
          <Route path='/my-profile' Component={Home} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
