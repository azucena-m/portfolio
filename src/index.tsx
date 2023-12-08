import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <div className="carousel w-full">
            <App />
            <About/>
            <Work/>
            <Contact/>
        </div>
    </React.StrictMode>
);
