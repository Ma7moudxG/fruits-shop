"use client"
import React from 'react'
import Link from 'next/link'
import useCart from './(store)/store'
import Modal from './Modal'

export default function  Header () {

  const cartItems = useCart(state => state.cart)
  const openModal = useCart(state => state.openModal)
  const handleOpenModal = useCart(state => state.setOpenModal)
  let totalCost = 0
  cartItems.forEach(element => {
    totalCost += element.cost  
  });
  

  return (
    <header className='px-12 sticky top-0 bg-white  border-b border-solid 
        border-green-200 shadow-mdz-50 py-4 flex items-center justify-between'>
          {openModal && (
            <Modal />
          )}
          <Link href={"/"}>
            <h1 className='text-2xl sm:text-3xl md:text-4xl uppercase cursor-pointer hover:scale-110 text-green-600 font-extrabold'>
              Fruit Shop
            </h1>          
          </Link>
          <div className='hidden md:block'>
            <div className='flex text-gray-700 gap-8 font-sm cursor-pointer'>
              <a href="/" className='hover:font-bold hover:text-green-500 text-xl'>Home</a>
              <a href="./fruits " className='hover:font-bold hover:text-green-500 text-xl'>All Fruits</a>
              <a href="#" className='hover:font-bold hover:text-green-500 text-xl'>Contact us</a>
            </div>
          </div>
          <div onClick={handleOpenModal} className='cursor-pointer group-relative grid place-items-center'>
            {cartItems.length > 0 && (
              <div className='absolute aspect-square sm:h-5 pointer-events-none h-4 grid place-items-center sm:top-10 
              bg-gray-800 text-white rounded-full right-12 -translate-y-1/2 translate-x-1/2'>
                <p className='text-xs sm:text-xs font-semibold '>{cartItems.length}</p>
              </div>
            )}
            <div className='flex'>
              <p className='text-xl font-semibold pr-6 text-gray-800'><span className='text-green-500 font-semibold'>$ </span>{totalCost/100}.00</p>
              <i className='fa-solid fa-basket-shopping text-2xl cursor-pointer hover:text-green-200 '></i>
            </div>
          </div>

        </header>
  )
}
