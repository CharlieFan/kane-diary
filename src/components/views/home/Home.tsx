import * as React from 'react'
import * as styles from './Home.scss'
import { Link } from 'react-router-dom'

export default class Home extends React.Component<{}, {}> {
    render() {
        return (
            <div className={styles['view-home']}>
                <h1>Home</h1>
                <img src={require('assets/asuka.png')} alt="asuka"/>
                <nav>
                    <ul>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </nav>
                <p>
                    Hello welcome to Kane Diary!
                </p>
            </div>
        )
    }
}

