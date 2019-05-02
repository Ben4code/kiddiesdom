import React from 'react'
import Fade from 'react-reveal/Fade'


export default function Footer() {
  return (
    <footer className="bck_red">
        <Fade delay={500}>
            <div className="font_righteous footer_logo_venu">Kiddiesdom</div>
            <div className="footer_copyright">
                 Safety for kids in Nigeria.
            </div>
        </Fade>
    </footer>
  ) 
}
