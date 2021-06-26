import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Ordering from './components/views/Ordering/Ordering';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Tables}> 
            <Tables />
            <p>123abc</p>
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={Tables}>
            <Tables/>
            <p>123abc</p>
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering/order/new'} component={Ordering} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={Ordering}>
            <Ordering/>
            <p>123abc</p>
          </Route>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;