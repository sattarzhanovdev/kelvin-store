import React from 'react'
import c from './Navbar.module.scss'
import logo from '../../img/logo.svg'
import cartLogo from '../../img/cart.svg'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [activeNav, setActiveNav] = React.useState(false)
  const [ dep, setDep ] = React.useState('')

  const Navigate = useNavigate()

  const cart = JSON.parse(localStorage.getItem('kelvin_cart'))

  React.useEffect(() => {
    setTimeout(() => {
      setDep(Math.random())
    }, 100)
  }, [dep])



  const path = useLocation().pathname
  
  return (
    <div className={c.header}>
      <div className={c.container} style={path === '/' ? {maxWidth: '2560px'} : {maxWidth: '1440px'}}>
        <div className={c.logo} onClick={() => Navigate('/')}>
          <img src={logo} alt="logo" />
        </div>
        {/* <div className={c.navbar}>
          <div className={activeNav ? c.navlist : c.disActive}>
            <ul>
              {
                navList.map(item => (
                  <li
                    key={item.id} 
                    onMouseOver={() => setIdNav(item.id)}
                    onMouseLeave={() => setIdNav(0)}
                    className={item.id === idNav ? c.active : c.disactive}
                    id={idNav === 0 ? c.activationFederation : ''}
                  >
                    <p>
                      {item.title}
                    </p>
                  </li>
                ))
              }
            </ul>
          </div>
          <div 
            className={c.menu} 
            onClick={checkMenu}
          >
            <div></div>
            <p>Меню</p>
          </div>
        </div> */}
        <div className={c.products}>
          <button onClick={() => Navigate('/products')}>
            Перейти к товарам
          </button>
          <div 
            className={c.cart}
            onClick={() => Navigate('/cart/')}
          >
            <div className={c.count}>
              <span>
                {cart ? cart?.length : 0}
              </span>
            </div>
            <img src={cartLogo} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
