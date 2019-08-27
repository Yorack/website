import {combineReducers, createStore} from 'redux';
import {AppReducer} from './reducer/appReducer.js';

export default class Store {
    static initialize = () => {
        const store = createStore(this.createReducers()); // no middleware for now

        return store;
    };

    static getInitialState = () => {
        // let's keep that for later

        return null;
    };

    static createReducers = () => {
        return combineReducers({
            app: AppReducer,
        });
    };
}
