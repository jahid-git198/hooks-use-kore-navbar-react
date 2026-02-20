 import React, { use } from 'react'
import Carddata from '../Card/Carddata'
 
 function Prigingoption({Prigigoption}) {

    const usedataoption = use(Prigigoption)
     
    
    




   return (
     <div>


        <div className=' grid grid-cols-9 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto  justify-center items-center'>
            { 
                usedataoption.map( card => <Carddata key={card.id} card={card}></Carddata>)
            }
        </div>
       
     </div>
   )
 }
 
 export default Prigingoption
 