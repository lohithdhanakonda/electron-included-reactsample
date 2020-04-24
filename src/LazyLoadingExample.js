import React, { Suspense } from 'react';
// import Child from './Child';
const Child = React.lazy(() => import('./Child'))

class LazyLoading extends React.Component {
    constructor() {
        super()
        this.state = {
            showChild: false
        }
    }
    render() {
        return <div onClick={() => this.setState({ showChild: !this.state.showChild })}>
            <Suspense fallback={<div>Loading...</div>}>
                {this.state.showChild
                    ? <Child />
                    : <div>I am not Child</div>
                }
            </Suspense>
        </div>
    }
}

export default LazyLoading





