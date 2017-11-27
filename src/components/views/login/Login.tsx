import * as React from 'react'
import { Link } from 'react-router-dom'


interface ILoginState {
    username: string,
    password: string
}

export default class Login extends React.Component<{}, {}> {
    state = {
        username: '',
        password: ''
    }

    handleSubmit() {
        console.log(this.state)
    }

    render() {
        return (
            <div className="form-panel">
                <h1>Sign in</h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <input type="text" placeholder="Email Address" maxLength={64}/>
                    <input type="password" placeholder="password"/>
                    <button className="btn" type="submit">Sign in</button>
                </form>
                <div>
                    <Link className="fl" to="/signup">Sign up now</Link>
                    <Link className="fr" to="/forget">Forget Password?</Link>
                </div>
            </div>
        )
    }
}