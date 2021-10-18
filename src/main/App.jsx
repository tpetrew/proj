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
        setTimeout(() => setContentLoaded(true), 2000)
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
                    foregroundColor="#ecebeb"
                >
                    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
                    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
                    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
                    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
                    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
                    <circle cx="22" cy="19" r="20" />
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