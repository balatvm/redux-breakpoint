import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './app.jsx';
import reducers from './reducers';
import syncBreakpointWithStore from 'redux-breakpoint';



const store = createStore(reducers);
syncBreakpointWithStore(store);

render(
     <Provider store={store}>
      <App/>
      </Provider>,
      document.getElementById("app")
    );
 