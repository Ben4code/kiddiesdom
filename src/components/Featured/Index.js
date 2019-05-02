import React from 'react'
import hero from '../../images/hero.png'
import TimeUntill from './TimeUntill'

export default function Index() {
    const heroStyle = {
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundposition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '105vh'
    }
    return (
        <div style={{ position: 'relative' }}>
            <div className="hero" style={heroStyle}>
            </div>
            <TimeUntill/>
        </div>
    )
}
