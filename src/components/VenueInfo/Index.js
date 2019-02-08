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
                        <div className="vn_icon" style={{background: `url(${icon_calendar})`}}>
                        </div>
                        <div className="vn_title">
                            Event Date & Time
                        </div>
                        <div className="vn_desc">
                            16 Dec 2019 9:00am
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
                        <div className="vn_icon" style={{background: `url(${icon_location})`}}>
                        </div>
                        <div className="vn_title">
                            Event Location
                        </div>
                        <div className="vn_desc">
                            38 Fleet Street. UK
                        </div>
                    </div>
                </div>
            </div>

        </Zoom>

        </div>
      </div>
    </div>
  )
}
