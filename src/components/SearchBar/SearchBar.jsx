import './SearchBar.scss'

import { useEffect, useRef, useState } from 'react'

export function SearchBar() {
    const [searchSelected, setSearchSelected] = useState(false)
    const [search, setSearch] = useState('')
    const searchRef = useRef(null)

    const handleClick = (param) => {
        setSearch(param)
        setSearchSelected(true)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchSelected(false);
                setSearch('')
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <form className={`search ${searchSelected ? 'search--selected' : ''}`} ref={searchRef}>
            <div className={`search__section search__section--long ${search === 'destination' ? 'search__section--focused' : ''}`}>
                <span className='search__title'>Where</span>
                <input type='text' className={`search__input ${searchSelected ? 'search__input--selected' : ''} ${search === 'destination' ? 'search__input--focused' : ''}`} placeholder='Search destinations' onClick={() => handleClick('destination')} />
            </div>
            <div className={`search__section search__section--short ${search === 'check-in' ? 'search__section--focused' : ''}`}>
                <span className='search__title'>Check in</span>
                <input type='text' className={`search__input search__input--short ${searchSelected ? 'search__input--selected' : ''} ${search === 'check-in' ? 'search__input--focused' : ''}`} placeholder='Add dates' onClick={() => handleClick('check-in')} />
            </div>
            <div className={`search__section search__section--short ${search === 'check-out' ? 'search__section--focused' : ''}`}>
                <span className='search__title'>Check out</span>
                <input type='text' className={`search__input search__input--short ${searchSelected ? 'search__input--selected' : ''} ${search === 'check-out' ? 'search__input--focused' : ''}`} placeholder='Add dates' onClick={() => handleClick('check-out')} />
            </div>
            <div className={`search__section search__section--long ${search === 'who' ? 'search__section--focused' : ''} `}>
                <span className='search__title'>Who</span>
                <input type='text' className={`search__input search__input--long ${searchSelected ? 'search__input--selected' : ''} ${search === 'who' ? 'search__input--focused' : ''}`} placeholder='Add guests' onClick={() => handleClick('who')} />
            </div>
            <button className='search__button' type='submit'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='search__icon'>
                    <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                </svg>
                {searchSelected ? <span className='search__button-text'>Search</span> : ''}
            </button>
        </form>
    )
}