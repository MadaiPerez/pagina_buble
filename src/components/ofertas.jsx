import React from 'react';
import tarobuble from '../images/tarobubbletea-removebg-preview.png';
import coffeebuble from '../images/coffeebubbletea-removebg-preview.png';

const ofertas = () => {
    return (
        <section id="contact" class="font-raleway flex flex-row bg-[#e0de90] w-full">
        <div class="hidden md:block">
            <img src={tarobuble} alt="" />
        </div>
        <div class="flex flex-col justify-center items-center py-10 md:py-0">
            <h1 class="font-bold text-[#5b4b45] text-2xl">Join in and get 15% off!</h1>
            <p class="text-center text-sm md:text-lg lg:text-xl pb-4 pt-4 text-[#5b4b45]">Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.
                Cumque, exercitationem.</p>
            <form class="flex flex-col md:flex-row items-center justify-center">
                <input type="text" class="py-2 px-5 border border-2 border-[#5b4b45] rounded-lg"
                    placeholder="Email address" />
                <button
                    class="py-2 px-5 ml-1 mt-3 md:mt-0 rounded-lg bg-[#5b4b45] hover:bg-black hover:bg-opacity-30 text-white font-bold">Subscribe</button>
            </form>
        </div>
        <div class="hidden md:block">
            <img src={coffeebuble} alt="" />
        </div>
    </section>
    )
}

export default ofertas;