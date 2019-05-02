import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import MyButton from '../UI/MyButton';


export default class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30,
    }

    percentage = () =>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        }, 30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade
                        onReveal={()=> this.percentage()}
                    >
                        <div className="discount_porcentage">
                            <span >{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before Dec 26 2019.</h3>
                            <p>Purchase your ticket before the 26th of December to get our 30% discount. In addition early participants will be trained on basic Paediatric First Aid skills.
                            </p>
                            <MyButton 
                            link="/" 
                            color="#fff" 
                            text="Purchase Tickets on Eventbrite"
                            bck="#ffa800"

                            />
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}
