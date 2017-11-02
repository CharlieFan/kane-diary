import React from 'react'
import stringParser from 'components/utils/stringParser'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        let query = stringParser(this.props.location.search)
        console.log(query)
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
            </div>
        )
    }
}
