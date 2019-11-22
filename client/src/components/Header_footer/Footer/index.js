import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';



const Footer = ({data}) => {
    return (
        data.siteData ?
        <footer className="bck_b_dark">
            <div className="container">
                <div className="logo">
                    Shop
                </div>
                <div className="wrapper">
                    <div className="left">
                        <h2>Informatii contact</h2>
                        <div className="business_nfo">
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faCompass}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Addresa</div>
                                    <div>{data.siteData[0].address}</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Telefon</div>
                                    <div>{data.siteData[0].phone}</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Orar</div>
                                    <div>{data.siteData[0].hours}</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Email</div>
                                    <div>{data.siteData[0].email}</div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="left">
                        <h2>Fii primul care afla!</h2>
                        <div>
                            <div>
                            Fii la curent cu ultimele informatii despre oferte,vanzari .
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
        </footer>
        :null
    );
};

export default Footer;