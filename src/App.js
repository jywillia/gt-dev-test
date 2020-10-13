// import react dependancies
import React from 'react';

// import presentational component
import {Layout} from "./components/Layout.js";

// import css styles for the app
import './App.css';

// app's main parent app
function App() {  
  return (
    <div className="App"> {/* main app wrapper with company link for header */}
      <header className="App-header">
        <a
          className="App-link"
          href="https://grastontechnique.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Graston Technique Website
        </a>
      </header>

      {/* app's main layout ui */}
      <Layout />
    </div>
  );
}

export default App;