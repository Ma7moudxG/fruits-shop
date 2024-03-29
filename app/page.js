import Image from 'next/image'
import Stripe from 'stripe'
import ProductCard from './ProductCard'
import Carousel from './Carousel'

async function getStripeProducts(){
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '',{
    apiVersion: '2020-08-27'
  })
  const res = await stripe.prices.list({
    expand: ['data.product']
  })
  const prices = res.data
  return prices
}

export default async function Home() {
  
  const products = await getStripeProducts()
  
  
  return (
    <main className="p-4 flex flex-col">
      <Carousel />
      <div className='max-w-[1400px] w-full mx-auto grid grid-cols-2
      sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 auto-cols-auto '>
        {products.map((product, productIndex) => {
          return (
            <ProductCard key={productIndex} product={product}/>
          )
        })}
      </div>
    </main>
  )
}
