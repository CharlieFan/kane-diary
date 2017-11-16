import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Router from 'router/Router'
import { Provider } from 'react-redux'
// import store from 'state/store/store'

import 'normalize.css'
import 'style/base.scss'

const main = (
    // <Provider>
        <Router />
    // </Provider>
)

// const main = (
//     <div>
//         <h1>Hello TS React!</h1>
//     </div>
// )

ReactDOM.render(
    main,
    document.getElementById('app')
)