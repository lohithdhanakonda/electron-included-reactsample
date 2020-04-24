import React, { Component } from 'react'

const TestContext = React.createContext('hello')

var store={};

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
        return (
            <TestContext.Provider
                value={{ updateCount: this.updateCount, count: this.state.count }}>
                <ChildOne />
            </TestContext.Provider>
        )
    }
}
class ChildOne extends Component {
    render() {
        return <ChildTwo />
    }
}
class ChildTwo extends Component {
    render() {
        return <ChildThree />
    }
}

class ChildThree extends Component {
    render() {
        return <TestContext.Consumer>
            {val => <h1 onClick={() => val.updateCount()}>{val.count}</h1>}
        </TestContext.Consumer>
    }
}
export default Parent;