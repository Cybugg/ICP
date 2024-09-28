import React from 'react';
import ReactDOM from 'react-dom/client';
import Actors from "./ic/Actors.tsx";
import { InternetIdentityProvider } from "ic-use-internet-identity";
import App from './App';
import './index.css';
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InternetIdentityProvider>
      <Actors>
        <App />
        <Toaster
          position="bottom-right"
          containerClassName="text-4xl"
        />
      </Actors>
    </InternetIdentityProvider>
  </React.StrictMode>
);
