import React from 'react'

export default function Index() {
  return (
    <div className="location_wrapper">
        <iframe title="Map of venue" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.740089105546!2d7.517358190901768!3d6.466445372687289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a476362d3353%3A0xe284ef0a7b3a895!2sNational+Orthopaedic+Hospital!5e0!3m2!1sen!2suk!4v1556830376572!5m2!1sen!2suk" width="100%" height="500" frameborder="0" allowfullscreen></iframe>

        <div className="location_tag">
            <div>Location</div>
        </div>
    </div>
  )
}
