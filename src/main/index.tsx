import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Router from 'router/Router'
// import { Provider } from 'react-redux'
// import store from 'state/store/store'

import 'normalize.css'
import 'style/base.scss'

const Main = () => {
    return (
        // <Provider>
            <Router />
        // </Provider>
    )
}

ReactDOM.render(
    <Main />,
    document.getElementById('app')
)