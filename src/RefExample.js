import React from 'react';

class RefsExample extends React.Component {
    constructor() {
        super()
        this.inputReference = React.createRef()
    }
    editInputs = (val) => {
        this.inputRef.value = val
        this.inputReference.current.value = val
    }
    render() {
        return (
            <>
                {/* <input ref={this.inputReference} />
                <button onClick={() => this.inputReference.current.focus()}>Click me to focus</button>
                <br></br>
                <input ref={e => this.inputRef = e} />
                <button onClick={() => this.inputRef.focus()}>Click me to focus</button>
                <br></br>
                <input onChange={(e) => this.editInputs(e.target.value)} /> */}
                {/* <input value='hello'/>
                <input defaultValue='hello'/> */}
            </>
        )
    }
}
export default RefsExample