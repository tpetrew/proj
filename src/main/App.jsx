import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCount } from '../reducers/Reducer';
import VerticalMenu from './components/VerticalMenu';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainScreen from './screens/MainScreen';
import WalletScreen from './screens/WalletScreen'
import CompasScreen from './screens/CompasScreen'
import StatisticsScreen from './screens/StatisticsScreen'
import ElementsScreen from './screens/ElementsScreen'
import SettingsScreen from './screens/SettingsScreen'

const App = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.repos.count)

    function onCountClick() {
        dispatch(setCount(5))
    }

    return (
        <Router>
            <div className="wrapper">
                <VerticalMenu />
                <Switch>
                    <Route exact path="/">
                        <MainScreen />
                    </Route>
                    <Route path="/wallet">
                        <WalletScreen />
                    </Route>
                    <Route path="/compas">
                        <CompasScreen />
                    </Route>
                    <Route path="/statistics">
                        <StatisticsScreen />
                    </Route>
                    <Route path="/elements">
                        <ElementsScreen />
                    </Route>
                    <Route path="/settings">
                        <SettingsScreen />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;