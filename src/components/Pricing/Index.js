
import React, { Component } from 'react'
import MyButton from '../UI/MyButton'
import Zoom from 'react-reveal/Zoom'


export default class Index extends Component {

    state = {
        prices: [100, 150, 200],
        linkTo: ['http://localhost:3000', 'http://localhost:3000', 'http://localhost:3000'],
        postions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Quas voluptatum aspernatur excepturi rerum quibusdam aperiam possimus ea eaque sint vel? Lorem ipsum dolor sit amet .',

            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatum aspernatur excepturi rerum quibusdam aperiam.',

            'Dolor sit amet consectetur adipisicing elit. Quas voluptatum aspernatur excepturi rerum quibusdam aperiam possimus?'
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
                                <span>${this.state.prices[index]}</span>
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
