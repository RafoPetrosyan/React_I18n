import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import reportWebVitals from './reportWebVitals';
import history from './routes/history';
import i18n from './i18next/index';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HistoryRouter history={history}>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </HistoryRouter>
);


reportWebVitals();
