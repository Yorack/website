import React from 'react';
import {Provider} from 'react-redux';
import Store from './Store';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';

const createStore = () => {
    const store = Store.initialize();
    return store;
}

export default ({ element }) => {
    const store = Store.initialize();

    return (
        <Provider store={store}>
            {element}
        </Provider>
    )
};
