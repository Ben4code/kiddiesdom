import React from 'react'
import Carousel from './Carousel'
import TimeUntill from './TimeUntill'

export default function Index() {
    return (
        <div style={{ position: 'relative' }}>
            <Carousel />
            <TimeUntill/>
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
        </div>
    )
}
