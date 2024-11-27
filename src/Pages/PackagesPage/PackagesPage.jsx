import './PackagesPage.scss'

import Cards from '../../components/Cards/Cards'
import { HeaderSearch } from '../../components/HeaderSearch/HeaderSearch'
import stay from "../../assets/stay-image.avif"

export function PackagesPage() {
    return (
        <>
            <HeaderSearch />
            <div className='card-list'>
                <Cards src={stay} location="Calgary, AB" beds="5" cost="439" rating="4.99" />
                <Cards src={stay} location="Calgary, AB" beds="5" cost="439" rating="4.99" />
                <Cards src={stay} location="Calgary, AB" beds="5" cost="439" rating="4.99" />
                <Cards src={stay} location="Calgary, AB" beds="5" cost="439" rating="4.99" />
            </div>

        </>

    )
}