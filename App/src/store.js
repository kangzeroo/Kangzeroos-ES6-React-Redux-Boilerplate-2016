import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import createLogger from 'redux-logger';

// reduxThunk allows us to store functions inside our actions (instead of only objects)
// recall that all actions will flow through each middleware until it reaches the end to be passed to reducers
const createStoreWithMiddleware = applyMiddleware(
	  reduxThunk,
  	createLogger()
)(createStore);
// create an instance of the redux store with all our reducers
const store = createStoreWithMiddleware(
  reducers
);

export default store;
