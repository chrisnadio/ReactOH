import './App.css';
import 'antd/dist/antd.css';
// import Button from './component/Button/Button';
import Footer from './component/Layout/Layout';
import BPCard from './pages/BPCard/BPCard';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Books from './pages/Books/Books';
import Contribute from './pages/Pages/Contribute';
import ContributorDetail from './pages/Pages/Contributor_detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from './component/Layout/Navbar';


function App() {
  return (
    <>
    <Router>
    <NavBar/>

    {/* Ini Class App */}
    <div className="App">
      
      {/* Ini Route Home */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        {/* Ini Route BPCard  */}
        <Route path="/BPCard">
          <BPCard />
        </Route>

        {/* Ini Route AboutMe  */}
        <Route path="/AboutMe">
          <AboutMe />
        </Route>

        <Route path="/Contribute">
          <Contribute />
        </Route>
        
        {/* Ini Route Books  */}
        <Route path="/Books">
          <Books />
        </Route>

        <Route path="/Contributor_detail">
          <ContributorDetail />
        </Route>

      </Switch>
      <Footer />
    </div>
    </Router>
    </>
  );
};

export default App;