import React, { Component } from 'react'


class Parent extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    updateCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return <ChildOne updateCount={this.updateCount} count={this.state.count} />
    }
}
class ChildOne extends Component {
    render() {
        return <ChildTwo {...this.props} />
    }
}
class ChildTwo extends Component {
    render() {
        return <ChildThree {...this.props} />
    }
}
class ChildThree extends Component {
    render() {
        return <h1 onClick={() => this.props.updateCount()}>{this.props.count}</h1>
    }
}
export default Parent;