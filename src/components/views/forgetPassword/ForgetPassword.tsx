import * as React from 'react'
import { Link } from 'react-router-dom'

export default class Forget extends React.Component<{}, {}> {
    render() {
        return (
            <div className="form-panel">
                <h1>Forgot password</h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <input type="text" placeholder="Email"/>
                    <button type="submit">Send reset link</button>
                </form>
                <div>
                    <Link to="/">Back to Sign in</Link>
                </div>
            </div>
        )
    }
}