import React from 'react';
import DetialView from './detailView';
import MasterView from './masterView';
import { Switch, Route } from 'react-router-dom';

/** React function component */
export default function ViewContainer() {

    return (
        <Switch>
            <Route exact path="/">
                <MasterView />
            </Route>
            <Route path="/forest" component={DetialView} />
            <Route path="/sky" component={DetialView} />
            <Route path="/desert" component={DetialView} />
            
            <Route>🌈🌈🌈🌈🌈🌈🌈🌈🐞🐌</Route>
        
        </Switch>
    )
}