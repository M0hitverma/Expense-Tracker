import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import './index.css';
import App from './App';
import { Provider } from './context/context';

ReactDOM.render(
     <SpeechProvider appId="d43a1486-e69a-4f1a-84bd-1cff09e69999" language="en-US">
    <Provider >
          <App />
    </Provider>
    </SpeechProvider>,
   document.getElementById('root'));
