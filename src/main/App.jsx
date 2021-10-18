import React from 'react';
import VerticalMenu from './components/VerticalMenu';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainScreen from './screens/MainScreen';
import WalletScreen from './screens/WalletScreen'
import CompasScreen from './screens/CompasScreen'
import StatisticsScreen from './screens/StatisticsScreen'
import ElementsScreen from './screens/ElementsScreen'
import SettingsScreen from './screens/SettingsScreen'

const App = () => {

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