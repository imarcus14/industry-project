import './HeaderSearch.scss'

import { Logo } from '../Logo/Logo.jsx'
import { SearchBar } from '../SearchBar/SearchBar.jsx'

export function HeaderSearch() {
    return (
        <header className='header-search'>
            <div className='header-search__top'>
                <Logo />
                <nav className='header-search__nav'>
                    <span className='header-search__nav-link header-search__nav-link--selected'>Stays</span>
                    <span className='header-search__nav-link'>Experiences</span>
                </nav>
                <div className='header-search__settings'>
                    <span className='header-search__settings-text'>Airbnb your home</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className='header-search__settings-language'><path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path></svg>
                    <button className='header-search__settings-profile-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 32 32' className='header-search__settings-button-hamburger'>
                            <path d="M2 16h28M2 24h28M2 8h28"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='header-search__settings-profile'><path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path></svg>
                    </button>
                </div>
            </div>
            <SearchBar />
        </header>
    )
}