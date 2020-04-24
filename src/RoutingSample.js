import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    withRouter
} from "react-router-dom";

class RoutingSample extends React.Component {

    render() {
        this.some = {
            path: "/topics/:id",
            component: SAmple,
            exact: true
        }
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/hello">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/about/:wish">
                            {withRouter(About)}
                            {/* <About /> */}
                        </Route>

                        <Route {...this.some}>
                        </Route>
                        <Route path="/topics/:id/:id" component={Topics} exact={true}>
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router >
        )
    }
}

function Home() {
    return <h2>Home</h2>;
}

class About extends React.Component {
    render() {
        return <h2>About {console.log(this.props)}</h2>;

    }
}
const SAmple = () => {
    return <div>Sample</div>
}
function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    {/* <Link to={`${match.url}/components`}>Components</Link> */}
                    <Link to={`/topics/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
          </Link>
                </li>
            </ul>


            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                    {/* {withRouter(Topic)} */}
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}
// class Topic extends React.Component {
//     render() {
//         return (
//             <div>Requested topic ID:{this.props.match.params.topicId}{console.log(this.props.match)}</div>
//         )
//     }
// }
export default RoutingSample