import React, { useState } from 'react'
import './search-bar.css'

const SearchBar = (props) => {

    const { onSearch } = props;

    const [searchText, setSearchText] = useState("");

    const handleInput = (e) => {
        const text = e.target.value;
        setSearchText(text);
    }

    const handleEnterKeyPressed = (e) => {
        if(e.key === 'Enter') {
            onSearch(searchText);
        }
    }
    return (

        <div className="control">
            <input 
                className="input" 
                type="text" 
                placeholder="Search your Planet"
                onChange={handleInput}
                onKeyPress={handleEnterKeyPressed}
                value={searchText}
            />

        </div>

    )
}

export default SearchBar
