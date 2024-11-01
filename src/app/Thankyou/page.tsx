
import Link from "next/link"

export default function thankyou(){
    return(
<div className="bg-gray-300 text-center mt-32 mb-32 py-10 px-8 mx-80">
    <h1 className="text-3xl text-blue-600 px-4 py-2 font-bold"><em>Thankyou For Your Order!!!</em></h1>
    <p className="mt-2 text-sm p-2 text-gray-700 font-bold"><em>Your Order will be delivered in 3 Working Days &#128667;</em></p>

{/* bottun */}

    <div className="text-center mt-7">
    <Link href="/"> 
<button className="text-white hover:bg-gray-600 shadow-2xl hover:text-white font-semibold text-xs py-2 px-4 rounded-md bg-blue-700">
    Back to Home
</button>
</Link>
</div>
</div>
    )
}