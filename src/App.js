import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/WaiterContainer';
import NotFound from './components/views/NotFound/NotFound';
import NewBooking from './components/views/NewBooking/NewBooking';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import EventNew from './components/views/EventNew/EventNew';
import OrderNew from './components/views/OrderNew/OrderNew';
import Order from './components/views/Order/Order';

import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import store from './redux/store';
import { Provider } from 'react-redux';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2b4c6f',
    },
    /*secondary: {
      main: '#11cb5f',
    },*/
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/panel">
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={'/'} component={Dashboard} />
                <Route exact path={'/kitchen'} component={Kitchen} />
                <Route exact path={'/login'} component={Login} />
                <Route exact path={'/tables'} component={Tables} />
                <Route exact path={'/tables/booking/:id'} component={Booking} />
                <Route exact path={'/tables/bookingNew'} component={NewBooking} />
                <Route exact path={'/tables/events/:id'} component={Event} />
                <Route exact path={'/tables/eventsNew'} component={EventNew} />
                <Route exact path={'/waiter'} component={Waiter} />
                <Route exact path={'/waiter/order/:id'} component={Order} />
                <Route exact path={'/waiter/orderNew'} component={OrderNew} />
                <Route path='*' component={NotFound} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
