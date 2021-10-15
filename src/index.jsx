import './styles/reset.sass';
import './styles/index.sass';
import './styles/media-queries.sass';
import React from 'react';
import {render} from 'react-dom';
import App from './main/App';
import { Provider } from 'react-redux';
import { store } from './reducers';

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)