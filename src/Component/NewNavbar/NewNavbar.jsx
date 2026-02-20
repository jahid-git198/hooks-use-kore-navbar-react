import React, { useState } from 'react'
import New from './New';
import { Menu, X } from 'lucide-react';







const navData = [
    {
        id: 25,
        name: "User Profile",
        path: "/users/25"
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



function NewNavbar() {

    const likns = navData.map(manu => <New key={manu.id} manu={manu}> </New>)

    const [open, setopen] = useState(false)

    return (
        <div>
            <div className=' md:hidden flex ' onClick={() => setopen(!open)}>



                {open ? <X></X> : <Menu></Menu>}



            </div>
            {/*  small divice ar jonno  */}

            <ul className={`
                 absolute md:hidden bg-amber-100 text-black font-bold text-2xl transform ease-in-out duration-1000 
                 
                  ${open ? "translate-x-0" : "-translate-x-full"}`}>
                {
                    likns
                }
            </ul>

            {/*  big divice ar jono  */}
            <ul className=' hidden md:flex  gap-10'>
                {
                    likns
                }
            </ul>





        </div>
    )
}

export default NewNavbar
