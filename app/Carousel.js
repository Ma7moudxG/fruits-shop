import Link from "next/link";

export default function Carousel(){
    return (
        <main className="p-4 flex flex-col">
            <div className='max-w-[1400px] w-full mx-auto grid grid-cols-1
            md:grid-cols-2 gap-4 auto-cols-auto '>
                <div className="bg-green-200 h-72 pl-4 rounded flex justify-between items-center">
                    <div className="sm:px-4 md:px-6 px-2">
                        <p className="text-green-700 text-xs">Hot Deals!</p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 py-2 sm:py-4">Fresh <br/> Fruits </h1>
                        <p className=" text-red-500 text-xs">Up to 30% off </p>
                        <Link href="./fruits">
                            <p className=" text-green-700 text-xs pt-4">Shop now &rarr; </p>
                        </Link>
                    </div>
                    <div>
                        <img src="/basket.png" className=" size-full max-h-[300px] pr-2 "/>
                    </div>
                </div>
                <div className="bg-orange-200 h-72 pl-4 rounded flex justify-between items-center">
                    <div className=" sm:px-4 md:px-6 px-2 ">
                        <p className="text-green-700 text-xs">COMING SOON!</p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 py-2 sm:py-4">Fresh <br/> Vegies </h1>
                        <Link href="./fruits">
                            <p className=" text-green-700 text-xs pt-4">Subscribe now! &rarr; </p>
                        </Link>
                    </div>
                    <div>
                        <img src="/vege.png" className="size-full max-h-[300px] pr-2"/>
                    </div>
                </div>
            </div>
        </main>
    )
}