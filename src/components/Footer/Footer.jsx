import "./Footer.scss"

import facebook from "../../assets/facebook.svg"
import global from "../../assets/global-svgrepo-com.svg"
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer__top">
                <div className="footer__sections">
                    <h3>Support</h3>
                    <p>Help Center</p>
                    <p>AirCover</p>
                    <p>Anti-discrimination</p>
                    <p>Disability Support</p>
                    <p>Cancellation Options</p>
                    <p>Report neighborhood concern</p>
                </div>
                <div className="footer__sections">
                    <h3>Hosting</h3>
                    <p>Airbnb your home</p>
                    <p>AirCover for Hosts</p>
                    <p>Hosting resources</p>
                    <p>Community forum</p>
                    <p>Hosting resposibly</p>
                    <p>Join a free hosting class</p>
                    <p>Find a co-host</p>
                </div>
                <div className="footer__sections">
                    <h3>Airbnb</h3>
                    <p>Newsroom</p>
                    <p>New Features</p>
                    <p>Careers</p>
                    <p>Investors</p>
                    <p>Gift cards</p>
                    <p>Airbnb.org emergency stays</p>
                </div>
            </div>
            {/* <hr></hr> */}
            <div className="footer__bottom">
                <p>© 2024 Airbnb, Inc.· Privacy · Terms · Sitemap</p>

                <div className="footer__bottom-left">
                    <div className="footer__wrapper">
                        <img className="global-svg" src = {global} alt="Image of a globe with lines"/>
                        <p>English(CA)</p>
                    </div>
                    <p>$ CAD</p>
                    <div className="footer__wrapper">
                        <img className="footer__icon" src={facebook} alt="black facebook icon" />
                        <img className="footer__icon" src={twitter} alt="black twitter icon" />
                        <img className="footer__icon" src={instagram} alt="black instagram icon" />
                    </div>
                    
                </div>
            </div>
        </div>

     );
}
 
export default Footer;