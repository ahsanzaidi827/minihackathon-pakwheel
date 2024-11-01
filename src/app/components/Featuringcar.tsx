
import Image from "next/image"
import Link from 'next/link';


export default function Featuringcar(){
    return (
<div className="mt-5 p-5">
<div className="flex justify-between mx-44">
    <div className="text-xl font-bold text-gray-800">Featured New Cars</div>
    <div className="text-xs cursor-pointer text-blue-500 font-semibold">View All New Cars</div>
</div>

<div className="flex justify-start mx-44 gap-6">
    <Link href="/" className="text-gray-800 hover:font-semibold py-3 hover:text-black hover:border-b-2 border-blue-600">Popular</Link>
    <Link href="/" className="text-gray-800 hover:font-semibold py-3 hover:text-black hover:border-b-2 border-blue-600">Upcoming</Link>
    <Link href="/" className="text-gray-800 hover:font-semibold py-3 hover:text-black hover:border-b-2 border-blue-600">Newly Launched</Link>
</div>

<hr />

        {/* cars */}
        <div className="flex justify-center mt-2 flex-wrap mb-6">

            {/* 1st car */}
            <Link href="/car1">
            <div className="w-48 border-2 rounded-md p-4 m-2 shadow-md">
                <Image 
                src="/car1.jpg"
                alt="pic"
                width={100}
                height={100}
                className="w-full object-contain mb-4"
                />
                <h3 className="text-sm text-center text-blue-800 font-semibold">
                    Toyota Corolla
                </h3>
                <p className="text-green-600 text-xs text-center font-medium">
                    PKR 59.7-75.5 lacs
                </p>
                <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 621 Reviews</p>
            </div>
            </Link>

            
             {/* 2nd car */}
             <Link href="/car2">
             <div className="w-48 border-2 rounded-md p-4 m-2 shadow-md">
                <Image 
                src="/car2.png"
                alt="pic"
                width={100}
                height={100}
                className="w-full object-contain mb-4"
                />
                <h3 className="text-sm text-center text-blue-800 font-semibold">
                    Suzuki Alto
                </h3>
                <p className="text-green-600 text-xs text-center font-medium">
                    PKR 23.3-30.5 lacs
                </p>
                <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 199 Reviews</p>
            </div>
            </Link>

             {/* 3rd car */}
             <Link href="/car3">
             <div className="w-48 border-2 rounded-md p-4 m-2 shadow-md">
                <Image 
                src="/car3.jpg"
                alt="pic"
                width={100}
                height={100}
                className="w-full object-contain mb-4"
                />
                <h3 className="text-sm text-center text-blue-800 font-semibold">
                    Honda City
                </h3>
                <p className="text-green-600 text-xs text-center font-medium">
                    PKR 46.5-58.5 lacs
                </p>
                <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 458 Reviews</p>
            </div>
            </Link>

             {/* 4th car */}
             <Link href="/car4">
             <div className="w-48 border-2 rounded-md p-4 m-2 shadow-md">
                <Image 
                src="/car4.jpg"
                alt="pic"
                width={100}
                height={100}
                className="w-full object-contain mb-4"
                />
                <h3 className="text-sm text-center text-blue-800 font-semibold">
                    Honda Civic
                </h3>
                <p className="text-green-600 text-xs text-center font-medium">
                    PKR 86.6-99.0 lacs
                </p>
                <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 357 Reviews</p>
            </div>
            </Link>
        </div>
</div>

    )
}