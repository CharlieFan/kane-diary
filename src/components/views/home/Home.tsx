import * as React from 'react'
import * as styles from './Home.scss'
import { Link } from 'react-router-dom'
import api from 'api'

interface IHomeState {
    title?: string
}

export default class Home extends React.Component<{}, IHomeState> {
    state = {
        title: 'wait for loading'
    }

    async componentDidMount() {
        let res = await api.demo.getDemoData()
        this.setState({
            title: res.title
        })
    }

    render() {
        return (
            <div className={styles['view-home']}>
                <h1>Home</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </nav>
                <p>
                    Hello welcome to Kane Diary!
                    SOME RANDOM CONTENT FOR TESTING AJAX: <br/>
                    {this.state.title}
                </p>
            </div>
        )
    }
}

