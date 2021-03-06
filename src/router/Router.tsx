import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from 'components/views/home/Home'
import Dashboard from 'components/views/dashboard'


const routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>
)

export default routes
