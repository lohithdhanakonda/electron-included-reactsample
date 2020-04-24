import React, { Component } from 'react'

class Parent extends Component {
    render() {
        return (
            // <ChildOne />
            <ChildOne>
                <div>child</div>
                <p>something</p>
            </ChildOne>
        )
    }
}
class ChildOne extends Component {
    render() {
    return <div className='child'>{console.log(this.props.children)}
    {this.props.children}</div>
    }
}
export default Parent