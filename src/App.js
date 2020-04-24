import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

class Child extends React.Component {
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  render() {
    return (
      <div className='child' onClick={() => this.props.handleChange()}>{this.props.wish} -first child</div>
    )
  }
}
function ChildTwo() {
  const [count, setCount] = useState(0);
  // this.state={
  //   count:0
  // }
  // setCount=()=>{
  //   this.setState({count: this.state.count+1})
  // }
  return <button onClick={() => setCount(count + 1)}>{count}</button>

}
// const ChildTwo = (props) => {
//   return <div>{props.wish} - second child</div>
// }
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      wish: 'hello'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  // shouldComponentUpdate(prevProps, prevState) {
  //   // if (prevProps !== this.props) {
  //     console.log('shouldComponentUpdate');
  //     return true;
  //   // }
  // }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    //will unmount
  }
  componentDidCatch() {
    console.log('componentDidCatch')
  }
  handleChange() {
    console.log('im calling')
    this.setState({ wish: this.state.wish == 'hello' ? 'hello' : 'hello' })
  }
  render() {
    return (
      <div className="App">
        <Child wish={this.state.wish} handleChange={this.handleChange} />
        <ChildTwo wish={this.state.wish} />
      </div>
    );
  }
}

export default App;


