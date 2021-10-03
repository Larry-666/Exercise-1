import React from 'react'
import styles from './NewsNotifications.module.css';

export default function NewsNotifications(props) {
return(

     <div className= {styles.notification}>
        
        <span className= {styles.header}>{props.topic}: </span>{props.body}
       

    </div>

)

}