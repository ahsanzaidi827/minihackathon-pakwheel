import Image from "next/image"
import Link from "next/link"

export default function car4() {

    return(

        <div className="mt-5 mx-48 bg-gray-100 p-5 mb-5">



             {/* heading for car4 */}
            <h1 className="text-center mt-6 font-bold text-3xl"> <u> Honda Civic 2024 Price in Pakistan, Images, Review &
            Specs</u>
            </h1>

            {/* image for car4 details */}
            <div className="flex justify-center mt-5">

               <Image 
               src="/car4.jpg"
               alt="car4"
               width={300}
               height={200}
               />

            </div>


            {/* button */}
            <div className="flex justify-center gap-3 mt-8">

                <button className=" text-gray-500 hover:bg-blue-600 hover:text-white px-4 py-1 text-sm  rounded-md shadow-xl bg-white border-2 border-gray-400">Book a test drive</button>

                <button className=" text-gray-500 hover:bg-blue-600 hover:text-white px-4 py-1 text-sm  rounded-md shadow-xl bg-white border-2 border-gray-400">Request Bank Finance</button>

                <button className=" text-gray-500 hover:bg-blue-600 hover:text-white px-4 py-1 text-sm  rounded-md shadow-xl bg-white border-2 border-gray-400">Visit Place</button>

                <button className=" text-gray-500 hover:bg-blue-600 hover:text-white px-4 py-1 text-sm  rounded-md shadow-xl bg-white border-2 border-gray-400">Car Inspection</button>

            </div>


            {/* Vehicle Description Heading */}
            <h1 className="text-center mt-5 font-semibold text-xl">Vehicle Description</h1>


            {/*  Vehicle Specification*/}
            <div className="flex justify-center mt-5 gap-5 text-sm">

                <div> <b>Number of Doors</b> 4 </div>
                <div> <b>Engine</b> 1800 CC </div>
                <div><b>Condition</b> 8.5/10</div>
                <div><b>Driven</b> 9,500 KM</div>
                <div><b>Suspension type</b> Soft Suspension</div>

            </div>

        
            <div className="flex justify-center gap-4  mt-2 text-sm">

               <div><b>Avg</b> 13 Km per ltr</div>
               <div><b>Transmission</b> Automatic</div>
               <div><b>Fuel Type</b> High Octane</div>

            </div>


            {/* pkr 50,00,000 */}
            <h1 className="text-green-600 text-center mt-9 text-xl font-mono">PKR 86.6-99.0 lacs</h1>


            {/* Make Payment Button*/}
            <div className="text-center mt-12 ">
                
                <Link href="/paymentsection">
                <button className="bg-blue-700 text-white px-6 py-1 hover:bg-blue-600 rounded-md">Make Payment</button>
                </Link>

            </div>


    
        </div>
    )
}