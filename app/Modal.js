"use client"
import React from 'react'
import ReactDOM from 'react-dom'
import PortalReactDOM from 'react-dom'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import useCart from './(store)/store'
import { useRouter } from 'next/navigation'


export default function Modal() {

    const closeModal = useCart(state => state.setOpenModal)
    const cartItems = useCart(state => state.cart)
    const router = useRouter()
    async function checkout(){
        const lineItems = cartItems.map(cartItem => {
            return {
                price: cartItem.price_id,
                quantity: 1
            }
        })
        const res = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({lineItems})
        })
        const data = await res.json()
        router.push(data.session.url)

    }
    console.log(cartItems)
    const [mounted, setMounted] = React.useState(false);
  
    React.useEffect(() => setMounted(true), []);
    
    let totalCost = 0
    cartItems.forEach(element => {
        totalCost += element.cost  
    });
  
    return mounted ? 
    createPortal(
        <div className='fixed top-0 left-0 w-screen h-screen  z-50 '>
            <div onClick={closeModal} className='bg-transparent absolute inset-0 '></div>
            <div className='flex flex-col gap-4 p-4 bg-white absolute right-0 top-0 h-screen 
            shadow-lg w-screen sm:w-96 max-w-screen '>
                <div className='flex items-center p-6 justify-between text-xl relative '>
                    <h1>Cart</h1>
                    <i onClick={closeModal} className='fa-solid fa-xmark cursor-pointer hover:opacity-60'></i>
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-300 w-2/3'></div>
                </div>
                <div className='p-4 flex flex-col gap-4 overflow-scroll flex-1'>
                    {cartItems.length === 0 ? (
                        <p>There is nothing in your cart</p>
                    ): (
                        <>
                            {cartItems.map((cartItem, itemIndex) => {
                                return (
                                    <div key={itemIndex} 
                                        className='flex flex-col gap-2 border-l border-solid border-slate-700 px-4'>
                                        <div className='flex items-center justify-between'>
                                            <h2>
                                                {cartItem.name}
                                            </h2>
                                            <p>
                                                ${cartItem.cost / 100} 
                                            </p>
                                        </div>
                                        <p className='text-sm text-slate-600'>Quantity: 1</p>
                                    </div>
                                )
                            })}
                        </>
                    )}
                </div>
                <div className='flex items-center justify-between gap-2 px-4 font-semibold text-xl'>
                    <h2>
                        Total: 
                    </h2>
                    <p>
                        ${totalCost / 100}.00
                    </p>
                </div>
                <div 
                onClick={checkout}
                className='border border-solid bg-green-500 text-white text-xl m-4 p-6 uppercase grid place-items-center hover:opacity-60 cursor-pointer '>
                    Checkout
                </div>
            </div>
        </div>, document.getElementById('portal') )
    : null;
}
