import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Layout from "./js/pages/Layout";
import Featured from "./js/pages/Featured";
import Archives from "./js/pages/Archives";
import Settings from "./js/pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
    <Router>
        <Layout/>
        <Route exact path="/" componet={Featured}/>
        <Route path="/archives" componet={Archives}/>
        <Route path="/settings" componet={Settings}/>
        
    </Router>, app
)
// export default app