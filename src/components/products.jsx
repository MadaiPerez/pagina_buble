import React from 'react';
import bublefresa from '../images/bubblefresa.jfif';
import bubletaro from '../images/bubbletaro.jfif';
import bublematcha from '../images/bubble matcha.jfif';
import bublecaramel from '../images/bubble caramel.jfif';

const Products = () => {
    return (
        <section class="flex flex-col font-raleway w-full">
        <div class="flex flex-row pt-6 pb-2 justify-center items-center text-black font-bold hover:text-[#5b4b45]">
            <h1 class="px-2 md:px-8">Flavors</h1>
            <h1 class="px-2 md:px-8">Places</h1>
            <h1 class="px-2 md:px-8">Prices</h1>
        </div>
        <div class="flex flex-col lg:flex-row px-14 py-5">
            <div class="w-full lg:w-1/5 flex flex-col px-3 pb-3 md:pb-0">
                <div class="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
                    <img src={bubletaro} class="w-40 md:w-56 lg:w-40" alt="" />
                    <div class="pt-4 w-full">
                        <p class="text-center font-bold">Lorem, ipsum dolor.</p>
                        <h1 class="my-3 text-green-800 text-center"><strong>$123</strong></h1>
                        <center>
                            <button
                                class="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">Buy
                                now</button>
                        </center>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/5 flex flex-col px-3 pb-3 md:pb-0">
                <div class="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
                    <img src={bublematcha} class="w-40 md:w-56 lg:w-40" alt="" />
                    <div class="pt-4 w-full">
                        <p class="text-center font-bold">Lorem, ipsum dolor.</p>
                        <h1 class="my-3 text-green-800 text-center"><strong>$123</strong></h1>
                        <center>
                            <button
                                class="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">Buy
                                now</button>
                        </center>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/5 flex flex-col px-3 pb-3 md:pb-0">
                <div class="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
                    <img src={bublecaramel} class="w-40 md:w-56 lg:w-40" alt="" />
                    <div class="pt-4 w-full">
                        <p class="text-center font-bold">Lorem, ipsum dolor.</p>
                        <h1 class="my-3 text-green-800 text-center"><strong>$123</strong></h1>
                        <center>
                            <button
                                class="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">Buy
                                now</button>
                        </center>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/5 flex flex-col px-3 pb-3 md:pb-0">
                <div class="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
                    <img src={bubletaro} class="w-40 md:w-56 lg:w-40" alt="" />
                    <div class="pt-4 w-full">
                        <p class="text-center font-bold">Lorem, ipsum dolor.</p>
                        <h1 class="my-3 text-green-800 text-center"><strong>$123</strong></h1>
                        <center>
                            <button
                                class="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">Buy
                                now</button>
                        </center>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/5 flex flex-col px-3 pb-3 md:pb-">
                <div class="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
                    <img src={bublefresa} class="w-40 md:w-56 lg:w-40" alt="" />
                    <div class="pt-4 w-full">
                        <p class="text-center font-bold">Lorem, ipsum dolor.</p>
                        <h1 class="my-3 text-green-800 text-center"><strong>$123</strong></h1>
                        <center>
                            <button
                                class="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">Buy
                                now</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Products;