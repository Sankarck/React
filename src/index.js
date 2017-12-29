import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Add1 from './components/Add1';
import ReducersConnect from './reducers/combine_reducer';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(ReducersConnect);


ReactDOM.render(<Provider store ={store}>
<Add1 /></Provider>,document.getElementById('root')
);
registerServiceWorker();


