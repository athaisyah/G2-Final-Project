import React, { Component } from 'react'
import App from './App';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import AllReducers from './redux/reducer'
// import {store, persistor} from './store';

const store = createStore(AllReducers)

class MyApp extends Component {

    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

export default MyApp;