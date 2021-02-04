import './App.css';
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Education from './components/Education'
import Navigation from './components/Navigation';
import Stage from './components/Stage';
import Competance from './components/Competance';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
<Router >
        <Route path="/" component={Navigation}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/Education" component={Education}/>
        <Route path="/Experience" component={Experience}/>
        <Route path="/Stage" component={Stage}/>
        <Route path="/Competance" component={Competance}></Route>
</Router>
      </div>

   
  );
}

export default App;
