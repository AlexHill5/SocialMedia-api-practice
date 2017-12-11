import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Landing/Landing.js'





export default (
    <Switch>
        <Route component={Landing} path='/' exact/>
        

    </Switch>
)