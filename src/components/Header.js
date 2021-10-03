import React from 'react'
import styles from './Header.module.css';

export default function Header() {




return (
    
<div className={ styles.container } >

  <div style= {{color: 'white', fontSize: '35px', fontWeight: '700', marginLeft: '120px' }}> HELSINGIN SANOMAT </div>

  
  
    

  <div className= {styles.navigation}>
 <div> 
       Etusivu </div>
  <div >Uutiset </div>
  <div >Lehdet </div>
  <div >Asiakaspalvelu </div>




    
  <div>Tilaa </div>
  <div>Kirjaudu </div>
  <div> Valikko </div>
  
 </div>

 </div>

  )


}