import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
<header className="py-4 shadow-lg bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white">
  <Container>
    <nav className="flex items-center">
      <div className="mr-6">
        <Link to="/">
          <Logo width="70px" />
          <h3>MYBLOG's</h3>
        </Link>
      </div>
      <ul className="flex items-center ml-auto space-x-6">
        {navItems.map((item) =>
          item.active ? (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.slug)}
                className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors duration-200 shadow-md"
              >
                {item.name}
              </button>
            </li>
          ) : null
        )}
        {authStatus && (
          <li>
            <LogoutBtn />
          </li>
        )}
      </ul>
    </nav>
  </Container>
</header>

  )
}

export default Header