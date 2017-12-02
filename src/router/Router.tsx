import * as React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from 'components/views/home/Home'
import Login from 'components/views/public/login/Login'

const token = 'hakfjkadsl;jfkasl;fjskasdfl;fjsa'
// const token =  false

const routes = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/main" render={
                    (props) => {
                        if (token) {
                            return <Home {...props} />
                        } else {
                            return <Redirect to="/" />
                        }
                    }
                } />

                <Route path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    </div>
)

export default routes
