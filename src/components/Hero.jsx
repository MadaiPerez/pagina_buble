import React from 'react';
import boba from '../images/Boba_Tea-removebg-preview.png';

const Hero = () => (


<section class="bg-[#fedfdd] w-full">
<div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 flex justify-center items-center mb-10 order-2 md:order-1">
        <div class="text-center px-5 sm:px-5 md:px-14 lg:px-28 md:pt-8">
            <h1 class="font-satisfy text-4xl pb-3">Bubble Tea</h1>
            <p class="font-raleway text-xs md:text-sm leading-6">Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
                Ea eius numquam dolor recusandae ipsum
                quibusdam, voluptatibus facilis dolores maiores perferendis.</p>
        </div>
    </div>
    <div class="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-5 order-1 md:order-2">
        <div class="px-8 md:px-16 lg:px-32 py-5 md:py-0">
            <img src={boba} class="" alt="" />
        </div>
    </div>
</div>
</section>

);

export default Hero;