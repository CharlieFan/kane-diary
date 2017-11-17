import * as React from 'react'
import * as styles from './Home.scss'

export default class Home extends React.Component<{}, {}> {
    render() {
        return (
            <div className={styles['view-home']}>
                <h1>Home View</h1>
            </div>
        )
    }
}

