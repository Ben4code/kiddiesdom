import React from 'react'
import Button from '@material-ui/core/Button'
import TicketIcon from '../../images/icons/ticket.png';


export default function MyButton(props) {
  return (
    <div>
        <Button 
            href={props.link}
            variant="contained" 
            size="small" 
            style={{
                background: props.bck,
                color: props.color
            }}>
            <img 
                src={TicketIcon} 
                alt="icon_button" 
                className="iconImage"/>

            {props.text}
        </Button> 
    </div>
  )
}
