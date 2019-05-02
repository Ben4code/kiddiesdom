
import React, { Component } from 'react'
import MyButton from '../UI/MyButton'
import Zoom from 'react-reveal/Zoom'


export default class Index extends Component {

    state = {
        prices: [1000, 1500, 2000],
        linkTo: ['/', '/', '/'],
        postions: ['Earlybird', 'General', 'VIP'],
        desc: [
            'Book as early as the 26th of December to be registered as an earlybird attendee.',

            'This is our general ticket fee for every attendee. Ticket sales ends on the 26th of January.',

            'Get first-hand firstaid tranning plus presentation materials. Register as a VIP to get the best experience.'
        ],
        delay: [500,0, 500]
    }

    showBoxes = () => {
        return this.state.prices.map((box, index) => {
            return (
                <Zoom key={index} delay={this.state.delay[index]}>
                    <div className="pricing_item">
                        <div className="pricing_inner_wrapper">
                            <div className="pricing_title">
                                <span>&#x20A6;{this.state.prices[index]}</span>
                                <span> {this.state.postions[index]}</span>

                            </div>
                            <div className="pricing_description">
                                <span> {this.state.desc[index]}</span>
                            </div>
                            <div className="pricing_buttons">
                                <MyButton text="Purchase" bck="#ffa800" color="#fff" link={this.state.linkTo[index]} /></div>
                        </div>
                    </div>
                </Zoom>
            )
        })

    }

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        )
    }
}
