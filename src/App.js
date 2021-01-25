import './App.css';
import 'antd/dist/antd.css';
import Counter from './pages/Counter/counter';
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
import NavBar from './component/Navbar/Navbar';


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <div className="App">
          <Switch>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/bpcard">
              <BPCard />
            </Route>

            <Route path="/aboutMe">
              <AboutMe />
            </Route>

            <Route path="/contribute">
              <Contribute />
            </Route>
            
            <Route path="/books">
              <Books />
            </Route>

            <Route path="/contributor-detail/:id">
              <ContributorDetail />
            </Route>

            <Route path="/counter">
              <Counter />
            </Route>

          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;