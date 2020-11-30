import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './Pages/Dashboard/Dashboard';
import PaymentPage from './Pages/Payment/Payment';
import HistoryPage from './Pages/History/History';
import SettingsPage from './Pages/Settings/Settings';
// import HOC from '../Components/ComposedClass'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/payment' component={PaymentPage} />
        <Route path='/history' component={HistoryPage} />
        <Route path='/settings' component={SettingsPage} />
      </Switch>
    );
  }
}

export default Routes;