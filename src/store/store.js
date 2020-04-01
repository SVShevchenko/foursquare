import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../redux/rootReducer';

export const history = createBrowserHistory();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
