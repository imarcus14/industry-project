import "./ExperienceIdPage.scss";

import CheckoutCard from "../../components/CheckoutCard/CheckoutCard";
import { Header } from "../../components/Header/Header";
import cabin from "../../assets/whistler-cabin.png"

const ExperienceIdPage = () => {
    return ( 
        <>
            <Header/>
            <h3>Forest View Suites Cascade Lodge Whistler</h3>
            <div>
                <img className="cabin" src={cabin}/>
                <div className="cabin-small-container">
                    <img className="cabin-small" src={cabin}/>
                    <img className="cabin-small" src={cabin}/>
                    <img className="cabin-small" src={cabin}/>
                    <img className="cabin-small" src={cabin}/>
                </div>
            </div>
            <div>
                <div>
                    
                </div>
            <CheckoutCard price="397" checkIn="12-23-2024" checkOut="12-30-2024" guests="2" taxes="0.13"/>
            </div>
        </>
     );
}
 
export default ExperienceIdPage;