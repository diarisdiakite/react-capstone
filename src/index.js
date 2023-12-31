import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './features/store';
import './index.css';
import App from './App';
import { fetchCompanies, setFetchedCompanies } from './features/companies/companiesSlice';
import 'bootstrap/dist/css/bootstrap.css';
import '@fontsource/roboto';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';

store.dispatch(fetchCompanies());
store.dispatch(setFetchedCompanies);
/* store.dispatch(countriesTotalCompanies()); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
