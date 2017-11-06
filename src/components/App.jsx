import React from 'react'
import { Link } from 'react-router-dom'

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