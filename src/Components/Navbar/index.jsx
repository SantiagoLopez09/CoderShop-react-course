<<<<<<< HEAD
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4  '

  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = context.signOut || parsedSignOut

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(true)
  }

  const renderView = () => {
    if (isUserSignOut) {
      return (
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => isActive ? activeStyle : undefined }
            onClick={() => handleSignOut()}>
            Sign out
          </NavLink>
        </li>
      )
    } else {
      return (
        <>
          <li className='text-black/60'>
            teff@platzi.com
          </li>
          <li>
            <NavLink
              to='/my-orders'
              className={({ isActive }) => isActive ? activeStyle : undefined}>
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/my-account'
              className={({ isActive }) => isActive ? activeStyle : undefined}>
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/sign-in'
              className={({ isActive }) => isActive ? activeStyle : undefined}
              onClick={() => handleSignOut()}>
              Sign out
            </NavLink>
          </li>
        </>
      )
    }
  }
=======
import { useContext } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4';
>>>>>>> e2ef58b7835872b874b97bc2a319405729ac01c2

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
<<<<<<< HEAD
          <NavLink to='/'>
            Shopi
          </NavLink>
=======
          <NavLink to='/'>Shopi</NavLink>
>>>>>>> e2ef58b7835872b874b97bc2a319405729ac01c2
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
<<<<<<< HEAD
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
=======
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
>>>>>>> e2ef58b7835872b874b97bc2a319405729ac01c2
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
<<<<<<< HEAD
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
=======
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
>>>>>>> e2ef58b7835872b874b97bc2a319405729ac01c2
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
<<<<<<< HEAD
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
=======
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
>>>>>>> e2ef58b7835872b874b97bc2a319405729ac01c2
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
<<<<<<< HEAD
            onClick={() => context.setSearchByCategory('furnitures')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
=======
            onClick={() => context.setSearchByCategory('furniture')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
>>>>>>> e2ef58b7835872b874b97bc2a319405729ac01c2
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
<<<<<<< HEAD
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
=======
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
>>>>>>> e2ef58b7835872b874b97bc2a319405729ac01c2
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
<<<<<<< HEAD
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
=======
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
>>>>>>> e2ef58b7835872b874b97bc2a319405729ac01c2
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
<<<<<<< HEAD
        {renderView()}
        <li className='flex items-center'>
          <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
          <div>{context.cartProducts.length}</div>
=======
        <li className="text-black/60">santiagolopez@gmail.com</li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center'>
          <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
          <div>
            {context.cartProducts.length}
          </div>
>>>>>>> e2ef58b7835872b874b97bc2a319405729ac01c2
        </li>
      </ul>
    </nav>
  )
}

export default Navbar