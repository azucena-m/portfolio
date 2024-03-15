import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Nav from "./components/Nav";
import Background from './components/Background';



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Nav/>
        <App />
    </React.StrictMode>
);
