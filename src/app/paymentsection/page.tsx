
import Link from "next/link"

export default function payment(){
    return(
        <div className="py-6 my-4 mx-96 bg-gray-200">
            <h1 className="text-center text-blue-700 text-2xl px-4 py-2 font-bold">Enter your details and place your Order</h1>
            
            {/* Payment */}
            <form className="flex justify-center mt-8 items-center flex-col">
                <input type="text" placeholder="Enter your name" 
                className="w-3/6 px-4 py-2 rounded-md text-xs border-2 border-black"/>

                <input type="number" placeholder="Enter your contact number" 
                className="w-3/6 px-4 py-2 rounded-md text-xs mt-4 border-2 border-black"/>

                <input type="email" placeholder="Enter your email" 
                className="w-3/6 px-4 py-2 rounded-md text-xs mt-4 border-2 border-black"/>
            
            <textarea placeholder="Enter your complete address" 
                className="w-3/6 px-4 py-2 rounded-md text-xs mt-4 border-2 border-black"/>
            </form>

            <div className="text-center mt-7">
    <Link href="/Thankyou">
<button className="text-white mb-4 hover:bg-green-700 shadow-2xl hover:text-white font-semibold text-xs py-2 px-4 rounded-md bg-blue-700">
    Place Your Order
</button>
</Link>
</div>
        </div>
    )
}