import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Employee from './components/tables/Employee';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/Employee" component={Employee} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Login" component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
)

export default App;
