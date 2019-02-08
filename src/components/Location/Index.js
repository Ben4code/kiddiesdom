import React from 'react'

export default function Index() {
  return (
    <div className="location_wrapper">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9450408011003!2d-0.11015228422978553!3d51.51422427963629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b2b0219ce1%3A0x26962fd8e7733639!2sGoldman+Sachs+International!5e0!3m2!1sen!2sng!4v1549631710964" width="100%" height="500px" frameborder="0"  allowFullScreen></iframe>

        <div className="location_tag">
            <div>Location</div>
        </div>
    </div>
  )
}
