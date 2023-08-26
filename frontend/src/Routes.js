import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./Pages/Home";
import ListaPedidos from "./Pages/ListaPedidos";

function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pedidos" component={ListaPedidos} />
            </Switch>
        </Router>
    )
}

export default Routes;