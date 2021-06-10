import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Auth from './components/auth';
import Home from './components/home';
import Article from './components/article';

function App() {
  return (
    <div>
      
    <Router>
      
        <Switch>
          <Route exact path='/' component={Auth} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/article' component={Article} />
        
        </Switch>
      
    </Router>


  </div>
  );
}

export default App;
