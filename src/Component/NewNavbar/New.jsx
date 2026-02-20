import React from 'react'

function New({ manu }) {
  return (
    <div>
      <li className="menu-item  mt-2 ">
        <a href={manu.path}>{manu.name}</a>
      </li>
    </div>
  )
}

export default New
