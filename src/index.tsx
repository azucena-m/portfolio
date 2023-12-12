import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Nav from "./components/Nav";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Nav/>
        <div className="carousel w-full">
            <App />
            <About/>
            <Work/>
            <Contact/>
        </div>
    </React.StrictMode>
);
