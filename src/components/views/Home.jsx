import React from 'react'
import Avatar from 'components/tags/Avatar'

export default class Home extends React.Component {
    state = {
        increament: 0 
    }

    static defaultProps = {
        value: 0
    }

    updateIncreament = () => {
        this.setState({
            increament: this.state.increament + 1
        })
        return
    }

    render() {
        return (
            <div>
                <Avatar url={require('assets/asuka.png')}></Avatar>
                <button
                    onClick={this.updateIncreament}>
                    {Number(this.props.value) + Number(this.state.increament)}
                </button>
            </div>
        )
    }
}
