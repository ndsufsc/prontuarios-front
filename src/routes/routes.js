import React from 'react'
import { Switch, Route } from "react-router-dom"

import Login from '../screens/login/login';
import NovoProntuario from '../screens/novoprontuario/novoprontuario'
import Prontuarios from '../screens/prontuarios/prontuarios'

function Router() {
    return (
        <Switch>
            <Route path="/login" exact={true} component={Login} />
            <Route path="/" exact={true} component={Prontuarios} />
            <Route path="/novoprontuario" exact={true} component={NovoProntuario} />
        </Switch>
    );
}

export default Router;