 import React, { use } from 'react'
import Card from './Card';
 
 function Prigingoption({Prigigoption}) {


  const data = use(Prigigoption)
 
  
   return (
     <div>

      <div className=' grid grid-cols-1 md:grid-cols-2'>

        {
           data.map( card =>  <Card key={card.id} card={card}></Card>)
        }
      </div>
       
     </div>
   )
 }
 
 export default Prigingoption
 