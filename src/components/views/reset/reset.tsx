import * as React from 'react'
import { Link } from 'react-router-dom'

export default class Reset extends React.Component<{}, {}> {
    render() {
        return (
            <div className="form-panel">
                <h1>Reset Password</h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <input type="password" placeholder="New Password"/>
                    <input type="password" placeholder="Confirm Password"/>
                    <button type="submit">Reset</button>
                </form>
                <div>
                    <Link to="/">Back to Sign in</Link>
                </div>
            </div>
        )
    }
}