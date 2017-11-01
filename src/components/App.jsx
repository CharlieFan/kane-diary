import React from 'react'
import { Link } from 'react-router-dom'

// function wait() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('success')
//         }, 3000)
//     })
// }

// async function test() {
//     let res = await wait()
//     console.log(res)
// }

// test()

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Link to="/main/dashboard">To Dashboard</Link>
            </div>
        )
    }
}