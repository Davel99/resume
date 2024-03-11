import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import i18n from './config/i18n';
import Experience from './pages/Experience';
import Projects from './pages/Projects';


function App() {
  return (
    <Router>
      <header>
        <Header></Header>
      </header>
      <main className="text-white py-5">
        <Routes>
          <Route path='/home' Component={Home} />
          <Route path='/' Component={Home} />
          <Route path='/my-profile' Component={Home} />
          <Route path='/my-experience' Component={Experience} />
          <Route path='/my-projects' Component={Projects} />
        </Routes>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;