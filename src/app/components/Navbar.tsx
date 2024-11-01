
import Image from "next/image"


export default function Navbar(){

    return(

        <div className="bg-black flex h-24 justify-center items-center  " >


            <div>
                {/* for inserting pak wheel logo */}
                
                <Image
        src="/pakwheellogo.png" // Path to the image file
        alt="Description of image"
         width={150}// Width in pixels
         height={150} // Height in pixels
      />
            </div>



            <div className="w-4/5 items-center text-gray-50 py-9 " >
                <ul className="flex justify-center items-center gap-11 cursor-pointer ">
                    <li className=" hover:text-gray-300"> UsedCars </li>
                    <li className=" hover:text-gray-300">NewCars</li>
                    <li className=" hover:text-gray-300">Bikes</li>
                    <li className=" hover:text-gray-300">AutoStore</li>
                    <li className=" hover:text-gray-300">Videos</li>
                    <li className=" hover:text-gray-300">Forun</li>
                    <li className=" hover:text-gray-300">Blog</li>
                    <li className=" hover:text-gray-300">More</li>
                    <button className="bg-red-600 p-2 rounded"> Post an Ad</button>
                </ul>

                
            </div>
        </div>
    )
}