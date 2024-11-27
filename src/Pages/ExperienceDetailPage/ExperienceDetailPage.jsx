import './ExperienceDetailPage.scss'

import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb'
import CheckoutCard from '../../components/CheckoutCard/CheckoutCard'
import { DateCard } from '../../components/DateCard/DateCard'
import { Header } from '../../components/Header/Header'
import image1 from '../../assets/experienceDetail1.png'
import image2 from '../../assets/experienceDetail2.png'
import image3 from '../../assets/experienceDetail3.png'
import image4 from '../../assets/experienceDetail4.png'
import image5 from '../../assets/experienceDetail5.png'
import profile from '../../assets/profile.svg'
import { useState } from 'react'

export function ExperienceDetaiPage() {
    const [addBundle, setAddBundle] = useState(false)

    const handleClick = () => {
        setAddBundle(true)
    }

    return (
        <div>
            <Header />
            <main className='experience-detail'>
                <BreadCrumb tabs={['Whistler, Canada', 'Art and culture', 'Culture and history', 'Culture']} />
                <h1 className='experience-detail__heading'>Explore the Whistler Valleys Hidden Gems</h1>
                <div className='experience-detail__image-container'>
                    <img src={image1} className='experience-detail__image' />
                    <img src={image2} className='experience-detail__image' />
                    <img src={image3} className='experience-detail__image' />
                    <div className='experience-detail__image-subcontainer'>
                        <img src={image4} className='experience-detail__image' />
                        <img src={image5} className='experience-detail__image' />
                    </div>
                </div>
                <div className='experience-detail__details-container'>
                    <div className='experience-detail__details'>
                        <header className='experience-detail__details-header'>
                            <h2 className='experience-detail__details-host'>Experience hosted by Ry</h2>
                            <img className='experience-detail__details-profile' src={profile} />
                        </header>
                        <section className='experience-detail__bundle-section'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
                                <path d="M3.03006 14.0564L5.08185 4.6197C5.43841 2.97977 7.07089 1.95129 8.70405 2.33768L18.6937 4.70113C19.6857 4.93584 20.4907 5.65829 20.8309 6.61928L23.8197 15.0608C23.8795 15.2297 23.8928 15.4117 23.8582 15.5875L22.1726 24.1594C22.0153 24.9593 21.5394 25.6606 20.8542 26.1022L14.2198 30.3782C13.7643 30.6718 13.1579 30.5492 12.8523 30.1017L3.48425 16.3858C3.01911 15.7048 2.85484 14.8623 3.03006 14.0564Z" fill="white" stroke="#D03660" />
                                <path d="M5.09009 13.7638V4.05518C5.09009 2.37693 6.46679 1.02509 8.14476 1.05567L18.8309 1.25044C19.6088 1.26462 20.3507 1.58041 20.9001 2.13119L32.4521 13.7111C32.8415 14.1014 32.8415 14.7333 32.4521 15.1236L19.5385 28.0684C19.1478 28.4601 18.5133 28.4601 18.1226 28.0684L5.96621 15.8826C5.40516 15.3202 5.09009 14.5582 5.09009 13.7638Z" fill="white" stroke="#D03660" />
                                <path d="M7.05981 13.9235V3.375C7.05981 3.09886 7.28367 2.875 7.55981 2.875H18.7486C19.0166 2.875 19.2733 2.98254 19.4613 3.1735L24.8674 8.66573L30.5672 14.4565L24.6587 20.4079L18.9589 26.1417L7.35562 14.6335C7.1663 14.4457 7.05981 14.1901 7.05981 13.9235Z" fill="#F6D7DF" />
                                <circle cx="10.4687" cy="6.84641" r="1.30026" stroke="#D03660" stroke-width="1.25" />
                            </svg>
                            <div className='experience-detail__bundle-text-container'>
                                <span className='experience-detail__bundle-text'>Bundle and save</span>
                                <span className='experience-detail__bundle-text'>Save on your stay when you bundle in experiences. </span>
                            </div>
                        </section>
                        <section className='experience-detail__about'>
                            <h3 className='experience-detail__title'>What you'll do</h3>
                            <p className='experience-detail__text'>Discover the entire Whistler Valley through the eyes of a passionate local!Upon meeting in Whistler Village and getting acquainted, we’ll start with a scenic drive to the northern end of our valley. You'll enjoy an in-depth orientation, learn all about Whistler's first inhabitants and hear interesting local facts that you won’t find in the history books before arriving at the shore of stunning Green Lake.After enjoying some first-cla… <span className='experience-detail__text--more'>Read more</span></p>
                        </section>
                        <section className='experience-detail__date-selection'>
                            <h3 className='experience-detail__title'>From $ 125 CAD /person</h3>
                            <div className='experience-detail__date-card-container'>
                                <DateCard date='Mon, Dec 23' handleClick={handleClick} />
                                <DateCard date='Tue, Dec 24' handleClick={handleClick} />
                                <DateCard date='Fri, Dec 26' handleClick={handleClick} />
                            </div>
                        </section>
                    </div>
                    <div className='experience-detail__card-container'>
                        <CheckoutCard price='397' checkIn='12-23-2024' checkOut='01-02-2025' guests='2' taxes='0.15' addBundle={addBundle} />
                    </div>
                </div>
            </main>
        </div>
    )
}