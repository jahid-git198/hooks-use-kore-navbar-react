import React, { useState } from 'react'
import LIstbar from './LIstbar';
import { Menu, X } from 'lucide-react';

 
const navData = [
    {
        id: 25,
        name: "User Profile",
        path: "/users/25",
        element: <div>User Profile</div>
    },
    {
        id: 102,
        name: "Product Details",
        path: "/products/102"
    },
    {
        id: 202,
        name: "Blog Post",
        path: "/blog/202"
    },
    {
        id: 5501,
        name: "Order Details",
        path: "/orders/5501"
    },
    {
        id: 8,
        name: "Category Items",
        path: "/categories/8"
    }
];

function Navbar1() {



 const Links =  navData.map( menubar => <LIstbar  key={menubar.id} menubar={menubar}></LIstbar>)

 const [ open , setopen ] = useState(false)

    return (
        <div>



            <nav className=' flex'>

                <div className=' md:hidden' onClick={()=> setopen(!open)}>


                    {
                        open ? <X></X>: <Menu></Menu>
                    }
 
                </div>

                {/*  small divece ar jonne  */}
                   <ul className={` 
                      absolute  md:hidden   bg-amber-100 text-black font-bold text-2xl transform ease-in-out 
                      p-5 duration-1000 ${ open ? ' top-6 '  : ' -top-50'}
                        z-10
                        
                        ]:`}>
                        {
                            Links
                        }
                    </ul>



                            {/*  big dice ar jonne  */}
                <ul className='md:flex  hidden'>

                    {
                        Links
                    }

                </ul>
            </nav>

        </div>
    )
}

export default Navbar1
