import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/home' Component={Home} />
          <Route path='/' Component={Home} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
