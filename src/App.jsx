import './App.css'
import { Outlet, NavLink } from 'react-router-dom'

function App() {
  

  return (
    <>
      <header>
      <ul className="nav-links">
            <li>
              <NavLink className="links" to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink className="links" to="/explore">Explore</NavLink>
            </li>
            <li>
              <NavLink className="links" to="/user">User</NavLink>
            </li>
      </ul>
      </header>
      <Outlet/>
    </>
  )
}

export default App
