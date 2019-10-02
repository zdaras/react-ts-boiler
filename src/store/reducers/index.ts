import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import counter from './counter';

export default (history: History<any>) =>
	combineReducers({
		router: connectRouter(history),
		counter
	});
