import React, { useState, useEffect } from 'react';
import VerticalMenu from './components/VerticalMenu';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainScreen from './screens/MainScreen';
import WalletScreen from './screens/WalletScreen'
import CompasScreen from './screens/CompasScreen'
import StatisticsScreen from './screens/StatisticsScreen'
import ElementsScreen from './screens/ElementsScreen'
import SettingsScreen from './screens/SettingsScreen'
import ContentLoader from "react-content-loader"

const App = () => {

    const [contentLoaded, setContentLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => setContentLoaded(true), 3000)
    }, [])

    if (!contentLoaded) {
        return (
            <div className="hello-screen">
                <h1>Hello, Anton</h1>
                <h3>Wait just a second, your dash is prepairing</h3>
                <ContentLoader
                    speed={2}
                    width={300}
                    height={160}
                    viewBox="0 0 400 160"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ccc"
                >
                    <rect x="0" y="0" rx="3" ry="3" width="410" height="5" />
                </ContentLoader>
            </div>
        )
    } else
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