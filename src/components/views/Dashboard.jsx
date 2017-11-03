import React from 'react'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <input placeholder="what need to do?" type="text"/>
                <button>Add</button>
            </div>
        )
    }
}
