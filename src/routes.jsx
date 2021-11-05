import React from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
import Thanks from './Thanks';
import Landing from './Landing';
import Results from './Results';
import Happy from './components/HappyEndings/Happy';
import Manger from './components/Manger/Manger';
import Moorehead from './components/Moorehead/Moorehead';
import Slaughter from './components/Slaughter/Slaughter';

export default(
    <HashRouter>
    <Switch>
        <Route exact path ="/" component = { Landing } />
        <Route path ="/thanks" component = { Thanks } />
        <Route path ='/results' component = { Results } />
        <Route path = '/happy' component = { Happy } />
        <Route path = '/manger' component = { Manger } />
        <Route path = '/moorehead' component = { Moorehead } />
        < Route path = '/slaughter' component = {Slaughter } />
    </Switch>
    </HashRouter>
        

)