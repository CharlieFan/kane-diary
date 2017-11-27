import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from 'components/views/login/Login'
import Signup from 'components/views/signup/Signup'
import Forget from 'components/views/forgetPassword/ForgetPassword'
import Reset from 'components/views/reset/reset'
import Dashboard from 'components/views/dashboard'


const routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/reset" component={Reset}></Route>
            <Route path="/forget" component={Forget}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/" component={Login} />
        </Switch>
    </BrowserRouter>
)

export default routes
