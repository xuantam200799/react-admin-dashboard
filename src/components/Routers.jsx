import React from 'react';

import { Route, Switch} from 'react-router-dom';

import Dashboard from '../pages/Dashboard.jsx'
import Customers from '../pages/Customers.jsx'

const Routers = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/Customers' component={Customers} />
            
        </Switch>
    );
};

export default Routers;