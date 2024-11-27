import React from 'react';
import bubble1 from '../images/bubble1.png';
import bubble2 from '../images/bubble2.png';
import bubble3 from '../images/bubble3.png';
import bubble4 from '../images/bubble4.png';
import bubble7 from '../images/bubble7.png';
import bubble6 from '../images/bubble6.png';

const carrousel = () => {
    return (
    <section id="services" class="flex flex-col items-center font-raleway text-xl w-full py-5 px-6 md:px-0">
        <h1 class="text-center font-bold">Do you want to try our flavors?</h1>
        <div class="flex flex-wrap md:flex-row w-full">
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={bubble1} class="w-32 h-32" alt=""/>
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={bubble2} class="w-32 h-32" alt=""/>
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={bubble3} class="w-32 h-32" alt="" />
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={bubble4} class="w-32 h-32" alt="" />
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={bubble7} class="w-32 h-32" alt="" />
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                <img src={bubble6} class="w-32 h-32" alt="" />
                <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </section>
    )

};

export default carrousel;