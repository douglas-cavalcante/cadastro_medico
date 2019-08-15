import ReduxThunk from 'redux-thunk';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';

const middlewares = [ReduxThunk];

const store = createStore(rootReducer, middlewares);

export { store };
