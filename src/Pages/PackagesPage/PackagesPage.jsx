import './PackagesPage.scss'

import Cards from '../../components/Cards/Cards'
import { Header } from '../../components/Header/Header'
import cabin from "../../assets/whistler-cabin.png"
import stay from "../../assets/stay-image.avif"

export function PackagesPage() {
    return (
        <>
            <Header />
            <div className='card-list'>
                <Cards src={stay} location="Calgary, AB" beds="5" cost="439" rating="4.99"/>
                <Cards src={cabin} location="Whistler, BC" beds="1" cost="397" rating="4.75"/>
                <Cards src={stay} location="Calgary, AB" beds="5" cost="439" rating="4.99"/>
                <Cards src={cabin} location="Whistler, BC" beds="1" cost="397" rating="4.75"/>
            </div>
            
        </>
        
    )
}