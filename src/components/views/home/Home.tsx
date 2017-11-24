import * as React from 'react'
import * as styles from './Home.scss'
import { Link } from 'react-router-dom'
import api from 'api'

import { Button, DropdownButton, MenuItem } from 'react-bootstrap'

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
                    SOME RANDOM CONTENT FOR TESTING AJAX: <br/>
                    {this.state.title}
                </p>
                <Button bsStyle="warning">Button</Button>

                <DropdownButton title="default" id="default-dropdown"
                onSelect={(eventKey: any, e?: React.SyntheticEvent<DropdownButton>) => {
                    console.log(eventKey, e.target)
                }}>
                    <MenuItem eventKey="1">Action 1</MenuItem>
                    <MenuItem eventKey="2">Action 2</MenuItem>
                    <MenuItem eventKey="3">Action 3</MenuItem>
                    <MenuItem eventKey="4">Action 4</MenuItem>
                    <MenuItem eventKey="5">Action 5</MenuItem>
                </DropdownButton>
            </div>
        )
    }
}

