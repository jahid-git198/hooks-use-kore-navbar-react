 import React from 'react'
 
 function LIstbar({menubar}) {

 
  


   return (
     <div className='mr-10 '> 
          <li><a href={menubar.path}> { menubar.name }</a></li>
     </div>
   )
 }
 
 export default LIstbar
 