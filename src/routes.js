import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './containers/home';
import City from './containers/city';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/city/:city" component={City} />
    </Route>
)