import React from 'react'
import Router from 'router/Router'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'state/store/store'

import 'normalize.css'
import 'style/base.scss'

const main = (
    <Provider store={store}>
        <Router />
    </Provider>
)

ReactDOM.render(
    main,
    document.getElementById('app')
)