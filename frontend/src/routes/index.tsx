import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import { mapRoute } from './map'

export const Routes = () => {
    return (
        <Switch>
            {/* {
                mapRoute.map(item => {
                    <Route exact={item.exact} path={item.Route} component={item.Component} />
                })
            } */}
            <Route exact path="/" component={Home} />
        </Switch>
    )
}