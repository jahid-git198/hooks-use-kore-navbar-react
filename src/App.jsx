 
import { FaAccessibleIcon } from 'react-icons/fa'
import './App.css'
import { Home } from 'lucide-react'
import { Fa1 } from 'react-icons/fa6'
 
import Navbar1 from './Component/Navbar/Nabar1/Navbar1'
import { Suspense } from 'react'
import Prigingoption from './Component/Navbar/Prigingoption/Prigingoption'
import NewNavbar from './Component/NewNavbar/NewNavbar'


//  Public.json file ke amra use  korlam 

const Prigigoption = fetch('/public/Public.json').then(res => res.json())


function App() {
  

  return (
    <>
 
    
      
   {/* <Navbar></Navbar> */}
  <NewNavbar></NewNavbar>
   <Suspense  fallback={<span className="loading loading-spinner loading-md"></span>}>
      <Prigingoption Prigigoption={Prigigoption}></Prigingoption>


   </Suspense>





     
   
    </>
  )
}

export default App
