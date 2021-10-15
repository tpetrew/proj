import React from 'react';
import SearchIcon from '../../../24/basic/gray/search.svg';

const SearchBar = () => {
    return (
        <div className="main-panel__header__search">
            <input className="main-panel__header__search__input" type="text" name="search" autocomplete="off" placeholder="🔍 Search activity or another..." />
        </div>
    )
}

export default SearchBar;