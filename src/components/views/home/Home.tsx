import * as React from 'react'
import * as styles from './Home.scss'
import { Link } from 'react-router-dom'
import api from 'api'

import {
    Button,
    DropdownButton,
    MenuItem,
    Nav,
    NavItem
} from 'react-bootstrap'

interface IHomeProps extends Types.RouteComponentProps<IHomeProps> {
}

interface IHomeState {
    title?: string
    routerKey?: string
}

export default class Home extends React.Component<IHomeProps, IHomeState> {
    state = {
        title: 'wait for loading',
        routerKey: '/'
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
                <Nav bsStyle="pills"
                    activeKey={this.state.routerKey}
                    onSelect={(eventKey) => {
                        let routerKey = eventKey.toString()
                        this.setState({
                            routerKey
                        })

                        this.props.history.push(routerKey)
                    }}>
                    <NavItem eventKey="/">
                        Demo Home
                    </NavItem>
                    <NavItem eventKey="/dashboard">
                        Dashboard
                    </NavItem>
                </Nav>
                {/* <nav>
                    <ul>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </nav> */}
                <h1>Home</h1>
                <h2>UI Demos</h2>
                {/* <img src={require('assets/asuka.png')} alt="asuka"/> */}
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

