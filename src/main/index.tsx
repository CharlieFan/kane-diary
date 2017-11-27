import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { App } from './App'

import 'style/app.scss'

const appRoot = document.getElementById('app')

const render = (Component: React.ComponentClass) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        appRoot
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').App
        render(NextApp)
    })
}