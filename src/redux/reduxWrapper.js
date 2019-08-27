import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import Store from './Store';

const createStore = () => {
    const store = Store.initialize();
    return store;
}

export default ({ element }) => (
    <Provider store={createStore()}>{element}</Provider>
);
