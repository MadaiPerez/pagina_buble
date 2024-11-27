import React from 'react';
import cafe from '../images/cafe-removebg-preview.png';

const Header = () => (
  <header>
    <header class="text-gray-600 body-font mt-20">
        <div class="bg-[#5b4b45] flex flex-wrap flex-col md:flex-row items-center px-5 py-5 fixed top-0 left-0 right-0">
            <nav class="flex lg:w-2/5 flex-wrap items-center text-white text-sm md:text-base md:ml-auto">
                <a class="mr-5 hover:text-[#e0de90] font-medium cursor-pointer" href="#">Home</a>
                <a class="mr-5 hover:text-[#e0de90] font-medium cursor-pointer" href="#services">Services</a>
                <a class="mr-5 hover:text-[#e0de90] font-medium cursor-pointer" href="#about_us">About us</a>
                <a class="hover:text-[#e0de90] font-medium cursor-pointer" href="#contact">Contact</a>
            </nav>
            <a
                class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                <img src={cafe} class="w-32" alt="" />
            </a>
            <div class="lg:w-2/5 inline-flex lg:justify-end md:ml-3 lg:ml-0">
                <button
                    class="hidden md:inline-flex items-center bg-transparent border-2 py-1 px-3 focus:outline-none hover:text-[#5b4b45] font-medium hover:bg-white rounded-lg text-white text-base mt-4 md:mt-0">
                    Buy now
                </button>
            </div>
        </div>
    </header>
  </header>
);

export default Header;