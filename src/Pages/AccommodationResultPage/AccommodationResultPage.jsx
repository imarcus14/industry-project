import './AccommodationResultPage.scss'

import { Button } from '../../components/Button/Button'
import Cards from '../../components/Cards/Cards'
import { Header } from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import cabin from "../../assets/whistler-cabin.png"
import map from '../../assets/map-area.png'
import stay from "../../assets/stay-image.avif"
import { useState } from 'react'

export function AccommodationResultPage() {
    const [experiencesSelected, setExperiencesSelected] = useState(false)

    const handleAccommodationClick = () => {
        setExperiencesSelected(false)
    }

    const handleExperienceClick = () => {
        setExperiencesSelected(true)
    }

    return (
        <div>
            <Header />
            <main className='search-result'>
                <div className='search-result__icons'></div>
                <div className='search-result__button-container'>
                    <Button text='Regular Accommodations' style={experiencesSelected ? 'secondary' : 'primary'} handleClick={handleAccommodationClick} />
                    <Button text='Experiences' style={experiencesSelected ? 'primary' : 'secondary'} handleClick={handleExperienceClick} />
                </div>
                <div className='search-result__results'>
                    {experiencesSelected ? (
                        <div className='search-result__card-container'>
                            <Cards src={stay} location="Calgary, AB" beds="5" cost="439" rating="4.99" />
                            <Link className='card-list__link' to={'/bundle/:id'}>
                                <Cards src={cabin} location="Whistler, BC" beds="1" cost="397" rating="4.75" />
                            </Link>
                            <Cards src={stay} location="Calgary, AB" beds="5" cost="439" rating="4.99" />
                            <Cards src={cabin} location="Whistler, BC" beds="1" cost="397" rating="4.75" />
                        </div>
                    ) : (
                        <div className='search-result__card-container'>
                            <Cards src={cabin} location="Whistler, BC" beds="1" cost="397" rating="4.75" />
                            <Cards src={stay} location="Calgary, AB" beds="5" cost="439" rating="4.99" />
                            <Cards src={cabin} location="Whistler, BC" beds="1" cost="397" rating="4.75" />
                            <Cards src={stay} location="Calgary, AB" beds="5" cost="439" rating="4.99" />
                        </div>
                    )
                    }
                    <img src={map} alt='Map of Whistler, BC area' className='search-result__map' />
                </div>
            </main>
        </div>
    )
}