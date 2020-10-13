// import react dependency
import React from 'react';

// import presentational component
import CardGrid from "./CardGrid.js";

// import context provider could possibly go 1 level lower
import Provider from "./PageContextProvider";

// import css style rules
import '../App.css';

// app's presentational component
export function Layout() {
    
    return (
        <div className="Layout"> {/* wrapper for layout component */}
            {/* title for ui */}
            <h1 id="api-title">A Simple Rick and Morty Character API</h1>
                                            
            {/* add grid of cards to display character data using context provider to hold api results */}
            <Provider >
                <CardGrid />
            </Provider>
            
                
        </div>
    );
    
}