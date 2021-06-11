import React from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
import Thanks from './Thanks';
import Landing from './Landing';
import Results from './Results';

export default(
    <HashRouter>
    <Switch>
        <Route exact path ="/" component = { Landing } />
        <Route path ="/thanks" component = { Thanks } />
        <Route path ='/results' component = { Results } />
    </Switch>
    </HashRouter>
        

)