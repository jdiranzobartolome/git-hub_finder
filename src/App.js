import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {

  // For showing users from the beginning
/*   async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({ users: res.data, loading: false });
  }
   */
  // function that gets send to the Search component
  // so the search component can fire the function up and pass
  // information to here. So funciton can be used for passing 
  // info in the opposite way than props, but it's tricky because
  // in the component creation in JSX, both things appear similar. 

  // NOTA: INFO ABOUT THE { ... props } thing in User component call. 
  // https://www.udemy.com/course/modern-react-front-to-back/learn/lecture/14969858#questions/7278366
    return (
    <GithubState>
      <AlertState>
        <Router>
        <div className="App">
          <Navbar title='Github Finder' icon='fab fa-github' />
          <div className='container'>
            <Alert />
            {/* Switch allows you to put several routes inside so the routes are 
            checked up one by one, if the route coincidies with one, then it stops checking the rest.
            Without route, many "routes" might be rendered undered the same path if they both pass 
            Also it is important to see how to use parameters here, with the :login, 
            and fetching that in the component with match.parameters*/}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route component= {NotFound} />
            </Switch>
            
          </div>
          
        </div>
        </Router>
      </AlertState>
    </GithubState>
    );
}

export default App;
