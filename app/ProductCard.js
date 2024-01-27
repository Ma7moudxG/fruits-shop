"use client"
import { useRouter } from "next/navigation"
import useCart from "./(store)/store"

export default function ProductCard(props) {
  const { product } = props
  const { id:price_id, unit_amount: cost, product: productInfo } = product
  const { name, description } = productInfo
  const addItemToCart = useCart(state => state.addItemToCart)
  const setProduct = useCart(state => state.setProduct)
    

  const router = useRouter()

  function handleAddToCart(){
    const newItem = {
        quantity: 1,
        price_id: price_id,
        name,
        cost
    }
    addItemToCart({newItem})
}

  function onProductClick() {
    const newProduct = {
        name,
        description,
        price_id,
        cost,
        productInfo
    }
    setProduct({newProduct})
    router.push('/product?price_id=' + price_id)
  }

  return (
    <div 
    className="flex flex-col shadow  hover:shadow-xl cursor-pointer bg-gray-50 rounded-lg w-full ">
        <img 
        onClick={onProductClick}
        src={productInfo.images[0]} 
        alt={name} 
        className="w-full h-full object-cover p-4 "/>

        <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center justify-between">
                <h3 className="text-md font-semibold text-green-500">{name}</h3>
                <p className="text-xs">1 / kg</p>
            </div>
            <div className="text-sm flex justify-between items-center">
              <p>${cost / 100}.00</p>
              <button
                onClick={handleAddToCart}
                className=" text-slate-700 border hover:text-white hover:border-green-500 hover:bg-green-500 
                cursor-pointer ml-auto px-3 py-2 rounded-xl">
                    <i className="fa-solid fa-cart-plus text-sm"></i>
              </button>
            </div>
        </div>
    </div>

  )
}
