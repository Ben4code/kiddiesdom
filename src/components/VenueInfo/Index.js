import React from 'react'
import icon_calendar from '../../images/icons/calendar.png';
import icon_location from '../../images/icons/location.png';
import Zoom from 'react-reveal/Zoom'


export default function Index() {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <Zoom duration={800} >

                        <div className="vn_item ">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon" style={{ background: `url(${icon_calendar})` }}>
                                    </div>
                                    <div className="vn_title">
                                        Event Date & Time
                        </div>
                                    <div className="vn_desc">
                                        <p>Date: 12 Feb 2020 </p>
                                        <p>Time: 9:00am</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom delay={500} duration={800}>

                        <div className="vn_item ">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div className="vn_icon" style={{ background: `url(${icon_location})` }}>
                                    </div>
                                    <div className="vn_title">
                                        Event Location
                        </div>
                                    <div className="vn_desc">
                                        Conference Hall, National Ortopedic Hospital Enugu.
                        </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>

                </div>
            </div>

            <div className="gallery">
                <h2>Gallery</h2>
                <div className="galleryImages">
                    <img src="./img/hero.jpg" alt="one" />
                    <img src="./img/radio.jpg" alt="" />
                    <img src="./img/sponsor.jpg" alt="" />
                    <img src="./img/team.jpg" alt="" />     
                </div>
            </div>

        </div>
    )
}
