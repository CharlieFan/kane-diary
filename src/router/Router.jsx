import React from 'react'
import App from 'components/App'
import Home from 'components/views/Home'
import Dashboard from 'components/views/dashboard/Dashboard'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/main/dashboard" component={Dashboard} exact={true} />
            <Route path="/" component={App} />
        </Switch>
    </BrowserRouter>
)

export default routes
