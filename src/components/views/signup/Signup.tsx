import * as React from 'react'
import { Link } from 'react-router-dom'

export default class Sigup extends React.Component<{}, {}> {
    render() {
        return (
            <div className="form-panel">
                <h1>Sign Up</h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="New Password"/>
                    <input type="password" placeholder="Confirm Password"/>
                    <button type="submit">Sign up</button>
                </form>
                <div>
                    <Link to="/">Back to Sign in</Link>
                </div>
            </div>
        )
    }
}