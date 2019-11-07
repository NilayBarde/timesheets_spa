import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router, Redirect, Switch, Route, NavLink, Link} from 'react-router-dom'
import { Provider, connect } from 'react-redux';

//Components and function
import Navigation from './navbar'
import {getManager} from './ajax'
import Login from './login'
import ManagerDashboard from './manager/dashboard'
import JobsDashboard from './jobs/jobs'
import NewJob from './jobs/new'
import NewWorker from './worker/new'


import store from './store'

export default function init(root) {
    let tree = (
        <Provider store={store}>
            <Index />
        </Provider>
    )
    ReactDom.render(tree, root)
}

function Index(props) {
    return (
        <Router>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={Login}>
                </Route>
                <Route exact path="/register">
                    Register
                </Route>
                <PrivateRoute path="/manager/dashboard">
                    <ManagerDashboard />
                </PrivateRoute>
                <PrivateRoute path="/jobs">
                    <JobsDashboard />
                </PrivateRoute>
	         <PrivateRoute path="/new_job">
                    <NewJob />
                </PrivateRoute>
                <PrivateRoute path="/new_worker">
                    <NewWorker />
                </PrivateRoute>
            </Switch>
        </Router>
    )
}


function PrivateRoute({children, ...rest}) {
    return(
        <Route
            {...rest}
            render={({ location }) => store.getState().session ? (children) : <Redirect to={
                {
                    pathname: '/',
                    state: {from:location}
                }
            } />}
        />
    )
}
