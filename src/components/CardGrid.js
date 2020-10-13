// import react dependancies and some shorthand methods
import React, {useState, useEffect, useContext} from "react";

// import presentational, input, and contect component
import Card from "./Card.js";
import SearchBar from "./SearchBar.js";
import Context from "./PageContext.js";

// import css style rules
import '../App.css';

// app's grid presentational component
function CardGrid() {    
    // set default endpoint for reference to avoid over-fetching
    const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;

    // setup page detail context to track where user is/ can go    
    const {page, updatePage} = useContext(Context);
    
    // create state to hold results of api calls, holds some duplicate info as page context initialize null
    const [results, updateResults] = useState(null);
    
    // create hook to handle async fetching and state management
    useEffect(() => {
        
        // check for redundant re-renders if possible
        if( page?.current === defaultEndpoint && results && page?.current === results?.info.current ) {
            // exit useEffect without doing all steps
            return;
        }

        // start async fetching from api wait for response before processing results, data, and errors, could use better error checking
        fetch(page?.current)
        .then(results => results.json())
        .then(data => {
            // create temp variable to get rid of duplicate data in results state(api return)
            var shallowInfo = {...data['info']};

            // create current property if it doesn't exist
            shallowInfo.current = page.current;
            
            // shallow copy data to remove duplicate data before storing in page state
            const newInfo = {info: shallowInfo};
            
            // create temporary constant for updating results state
            const newData = {info: shallowInfo, results: data.results};
            
            // update result state then page state maybe not in that order
            updateResults(newData);
            updatePage(newInfo);
        })        
        .catch((e) => { // check for errors, still get occasional html response instead of json
            console.log("Here is the api or parsing error! => " + e);            
        });
    }, [page, updatePage, results, defaultEndpoint]);  // dependancy array for useEffect

    // handler for load next page => updates the page context state with adjusting prev, next, and current url's
    function handleNextClick() {        
        updatePage(prev => {
            return { 
                ...prev,
                current: results.info?.next 
            }
        });
         
    }

    // handler for load previous page => updates the page context state with adjusting prev, next, and current url's
    function handlePrevClick() {        
        updatePage(current => {
            return { 
                ...current,
                current: results.info?.prev 
            }
        });
         
    }

    // helper function to update page context state in useEffect hook
    function handleSearch(endpoint) {        
        updatePage(endpoint);
    }

    return (
        
            <div className="gridWrapper"> {/* container list to wrap child components */}
                {/* conditionally render loading prompt if api is slow to respond */}
                {!results ? (
                    <div>Loading...</div>
                ) : (                     
                    <div>  {/* import searchbar with select form included */}
                        <SearchBar handleSearch={handleSearch} />                        
                        <div className="grid">  {/* dynamically create grid of character cards from array of api data */}
                            {results.results.map(toon=>{
                                const {id,name,species,status,gender,image} = toon;
                                return(<Card key={id} toonName={name} toonSpecies={species} toonStatus={status} toonGender={gender} imageUrl={image} />);
                            })}
                        </div>                   
                        
                        <div className="nav-button-row">
                            {/* create navigation buttons to load more or previous results if available could extract to own file */}
                            <button className="prevButton" onClick={handlePrevClick}
                            disabled={!results.info?.prev || !results}>Previous Page</button>
        
                            <button className="nextButton" onClick={handleNextClick}
                            disabled={!results || !results.info?.next}>Next Page</button>
                        </div>
                    </div>
                )}
            
            </div>  
        
    );        
    
}

// make function importable to rest of app
export default CardGrid;