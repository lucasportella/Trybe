// arquivo onde a redux store é criada
import { createStore, applyMiddleWare } from 'redux';
import thunk from 'redux-thunk';
import reducer from '/path/to/your/root/reducer';

...

const store = createStore(reducer, applyMiddleware(thunk));
...