import React from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
import Thanks from './Thanks';
import Landing from './Landing';

export default(
    <HashRouter>
    <Switch>
        <Route exact path ="/" component = { Landing } />
        <Route path ="/thanks" component = { Thanks } />
    </Switch>
    </HashRouter>
        

)