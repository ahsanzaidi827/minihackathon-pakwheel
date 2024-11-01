


import React from 'react'
import Link from 'next/link'


export default function Footer() {


  return (
    
 
    //  A footer in footer.tsx and render in layout.tsx for showing in every page
    
     <div className="w-full bg-black  h-52 flex  justify-center items-center">
     <footer className="w-full text-center mt-10">
       <button className="bg-slate-300 py-2 px-4 rounded-md mt-5">Enquire Now</button>
       <p className="mt-2 text-white">All rights reserved by Pakwheel</p>
       <p className='text-white mt-3'> Developed By: <Link href="https://www.linkedin.com/in/ahsan-zaidi-6664781a7/">  <u>Syed Ahsan</u></Link> </p>
       </footer>
    </div>
    
      )

}
 

