/**
 * The Container to put main layout
 */

import * as React from 'react'
import * as styles from './Home.scss'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import api from 'api'

// components:
import Demo from 'components/views/demo/Demo'
import Dashboard from 'components/views/dashboard'

interface IHomeProps extends Types.RouteComponentProps<IHomeProps> {
}

interface IHomeState {
    title?: string
    routerKey?: string
}

export default class Home extends React.Component<IHomeProps, IHomeState> {
    state = {
        // title: 'wait for loading',
        // routerKey: '/'
    }

    // async componentDidMount() {
    //     let res = await api.demo.getDemoData()
    //     this.setState({
    //         title: res.title
    //     })
    // }

    render() {
        return (
            <div className={styles['view-home']}>
                <section>
                    <Switch>
                        <Route
                            path={this.props.match.url + '/dashboard'}
                            component={Dashboard}></Route>

                        <Route
                            path={this.props.match.url + '/home'}
                            component={Demo}></Route>
                        
                        <Redirect
                            from="/main"
                            to="/main/home"></Redirect>
                    </Switch>
                </section>
                <footer>
                    Footer is here
                </footer>
            </div>
        )
    }
}

