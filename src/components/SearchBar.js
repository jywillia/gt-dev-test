// import react dependancies and create shorthand for the hooks
import React, { useState, useContext } from "react";

// import context for consumer functionality
import Context from "./PageContext.js";

// import css style rules
import '../App.css';

// app's search bar presentational component
const SearchBar = (props) => {
    // consume context from up the tree
    const {page, updatePage} = useContext(Context);

    // create state for select filter searches
    const [filter, setFilter] = useState("");
    
    // handler to help set filter state
    const handleChange = (e) => {
        // prevent default actions the set state
        e.preventDefault();
        setFilter(e.target.value);
    }

    // onSubmit handler for search bar 
    const handleOnSubmitSearch = (e) => {
        // prevent default action
        e.preventDefault();

        // get value from search form, convert to array, find query name
        const {currentTarget = {} } = e;
        const fields = Array.from(currentTarget?.elements);
        const fieldQuery = fields.find(field => field.name === 'query');

        // value from search bar to make api call
        const value = fieldQuery.value || '';
        const endpoint = `https://rickandmortyapi.com/api/character/?name=${value}`;

        // suffix for status filter, selecting any is same as no filter
        const filterSuffix = `&status=${filter}`;

        // create dynamic endpoint for next api call
        const resultEnd = filter ? endpoint + filterSuffix : endpoint;
        
        // update the page state for keeping track of what page of data user is on
        updatePage(
            {current: resultEnd, ...page} 
        );
    }
        // create searchbar and select form for user input
    return (
        <div id="search-bar"> {/* container div to wrap child component */}
            {/* form for search bar */}
            <form className="search" onSubmit={handleOnSubmitSearch} >
                {/* input from user */}
                <input name="query" type="search" placeholder="Search..." />

                {/* button to initiate query search */}
                <button>Submit</button>
            </form> 
            <form className="selectList" onSubmit={handleOnSubmitSearch} >
                <label className="filter-label">Status Filter:                    
                    <select value={filter} onChange={handleChange}>
                        <option value="">Any</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>                    
                </label>                
            </form>               
        </div>                
    );            
}

// make function available to import
export default SearchBar;