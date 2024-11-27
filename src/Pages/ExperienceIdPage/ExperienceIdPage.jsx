import "./ExperienceIdPage.scss";

import { Button } from "../../components/Button/Button";
import CheckoutCard from "../../components/CheckoutCard/CheckoutCard";
import { Header } from "../../components/Header/Header";
import Star from "../../components/Star/Star";
import cabin from "../../assets/whistler-cabin.png";
import car from "../../assets/Parking.svg";
import elavator from "../../assets/elavator.svg";
import experience from "../../assets/experience.png";
import frame from "../../assets/Frame.svg";
import kitchen from "../../assets/Kitchen.svg";
import profile from "../../assets/bnb-owner.svg";
import sauna from "../../assets/Amazing-Pools.svg";
import ski from "../../assets/Skiing.svg";
import snowflake from "../../assets/Arctic.svg";
import superhost from "../../assets/Superhost.svg";
import tv from "../../assets/TV.svg";
import waves from "../../assets/Amazing-Pools.svg";
import wifi from "../../assets/Wifi.svg";

const ExperienceIdPage = () => {
    return ( 
        <div className="page-container">
            <Header/>
            <h3 className="cabin__title">Forest View Suites Cascade Lodge Whistler</h3>
            <div className="cabin__wrapper">
                <img className="cabin" src={cabin}/>
                <div className="cabin-small__container">
                    <div className="cabin-small__duo-container">
                        <img className="cabin-small" src={cabin}/>
                        <img className="cabin-small" src={cabin}/>
                    </div>
                    <div className="cabin-small__duo-container">
                        <img className="cabin-small" src={cabin}/>
                        <img className="cabin-small" src={cabin}/>
                    </div>
                </div>
            </div>
            <div className="cabin__content-wrapper">
                <div>
                    <h3>Entire rental unit Whistler, Canada</h3>
                    <p>2 guests 1 bedroom  1 bath</p>
                    <div className="cabin__text-wrapper">
                        <Star/>
                        <p>4.75  <span className="text-underline">12 reviews</span></p>
                    </div>
                    <div className="cabin__host-wrapper">
                        <img src={profile} alt="air bnb profile picture for host"/>
                        <div>
                            <p>Hosted by Ben</p>
                            <p>Superhost 3 years hosting </p>
                        </div>
                    </div>
                    <div className="cabin__amenaties-wrapper">
                        {/* Add border bottom here */}
                        <div className="cabin__amenaties-single">
                            <img src={frame}/>
                            <p>You can check in with the building staff</p>
                        </div>
                        <div className="cabin__amenaties-single">
                            <img src={superhost}/>
                            <div>
                                <p>Ben is a Superhost</p>
                                <p>Superhosts are experienced, highly rated hosts.</p>
                            </div>
                        </div>
                        <div className="cabin__amenaties-single">
                            <img src={waves}/>
                            <div>
                                <p>Dive in</p>
                                <p>This is one of the few places in the area with a pool</p>
                            </div>
                        </div> 
                    </div>
                    <div className="cabin__extra-wrapper">
                       
                        <p>Some info has been automatically translated . Show original </p>
                        <p>Sink into the plush queen bed with quality linens and soft pillows after a day of exploring Whistlers outdoor activities. Located just a 9-min walk away from the Whistler VillageGondolas, the Cascade lodge is located in the heart of the Whistler Village</p>
                        <p>Sink into the plush queen bed with quality linens and soft pillows after a day of explorin...</p>
                        <p>Show more +</p>
                    </div>
                    <div className="cabin_experiences-wrapper">
                        {/* add border bottom */}
                        <h3>Add on Experience Bundles</h3>
                        <div className="cabin__experiences-horizontal">
                            <div className="cabin__experience">
                                <img src={experience} alt="Image preview of the experience"/>
                                <p>Explore Whistlers Gems</p>
                                <Button style ="primary" text="Learn more"/>
                            </div>
                            <div className="cabin__experience">
                                <img src={experience} alt="Image preview of the experience"/>
                                <p>Snowshoeing Valley</p>
                                <Button style ="primary" text="Learn more"/>
                            </div>
                            <div className="cabin__experience">
                                <img src={experience} alt="Image preview of the experience"/>
                                <p>Ski History Tour</p>
                                <Button style ="primary" text="Learn more"/>
                            </div>
                        </div>
                    </div> 
                </div>
            <CheckoutCard price="397" checkIn="12-23-2024" checkOut="12-30-2024" guests="2" taxes="0.13"/>
            </div>
        </div>
     );
}
 
export default ExperienceIdPage;