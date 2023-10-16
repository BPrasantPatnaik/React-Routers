import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    
  return (
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"/>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div>
    
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={({isActive}) =>
                                        `pl-2 px-2  ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    } to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) =>
                                        ` px-2 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    } to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) =>
                                        ` px-2 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    } to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    
  </div>
</nav>
    </div>
  )
}

export default Navbar