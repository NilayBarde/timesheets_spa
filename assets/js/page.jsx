import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Redirect, Switch, Route, NavLink, Link } from 'react-router-dom'
import { Provider, connect } from 'react-redux';

import Navigation from './navbar'
import { getManager } from './ajax'
import Login from './login'
import ManagerDashboard from './manager/dashboard'
import NewWorker from './worker/new'


import store from './store'

export default function init(root) {
    let tree = (
        <Provider store={store}>
            <Page />
        </Provider>
    )
    ReactDom.render(tree, root)
}

function Page(props) {
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
