import './Header.scss'

import { Logo } from '../Logo/Logo'

export function Header() {
    <header className='header'>
        <Logo />
        <div className='header__search-filled'>
            <span className='header__search-map'>Map Area</span>
            <span className='header__search-dates'>Dec. 23, 2024 - Jan. 2, 2025</span>
            <span className='header__search-guests'>2 guests</span>
            <button className='search__button'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='search__icon'>
                    <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                </svg>
            </button>
        </div>
    </header>
}