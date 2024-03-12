import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './config/i18n';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ScrollToTop from './utility/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <header>
        <Header></Header>
      </header>
      <main className="text-white py-5">
        <Routes>
          <Route path='/my-profile' Component={Home} />
          <Route path='/my-experience' Component={Experience} />
          <Route path='/my-projects' Component={Projects} />
          <Route
            path="*"
            element={<Navigate to="/my-profile" replace />}
          />
        </Routes>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
