// import react dependancies and shorthand method, then context creator function
import React, {useState} from 'react';
import PageContext from "./PageContext.js";

// create constant for default api url to initiate queries
const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;

// instantiate Provider constant that creates page details state to keep track of urls
const Provider = props => {
    const [page, updatePage] = useState({
        current: defaultEndpoint
    });

    // create context object to pass state to children
    const value = {page, updatePage};

    // return provider jsx with overridable defaults
    return (
        <PageContext.Provider
            value={value}>
            {props.children}
        </PageContext.Provider>
    );
};

// make importable to rest of app
export default Provider;