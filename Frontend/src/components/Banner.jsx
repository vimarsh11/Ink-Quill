import React from 'react'
import Book from "../../public/Book.png";

function Banner() {
  return (
     <>
        <div class="bg-white  dark:bg-gray-800">
    <section class="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-18">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-0 lg:grid-cols-2">
                <div class="order-2 lg:order-1">
                    <h1 class="text-4xl font-bold text-black mt-5 lg:mt-5 mb-8 sm:text-6xl xl:text-8xl">Discover worlds within pages !!!</h1>
                    <a href="#" title="" class="inline-flex items-center px-6 py-4 mt-5 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-5 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                        Join for free
                        <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>

                    <p class="mt-5 text-gray-600">Already joined us? <a href="#" title="" class="text-black transition-all duration-200 hover:underline">Log in</a></p>
                </div>

                <div class="order-1 lg:order-2 relative lg:pl-40 lg:pb-40">
                    <img class="w-full lg:right-0 lg:top-0:" src={Book} alt="Book" />
                    <p class="dark:text-cream mt-2 text-base font-bold text-black mb-8 lg:mt-8 sm:text-xl">Explore our collection and let your imagination!</p>
                </div>
            </div>
        </div>
    </section>
</div>

     </>
  )
}

export default Banner