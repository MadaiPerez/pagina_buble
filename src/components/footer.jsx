import React from 'react';
import imagenfooter from '../images/cafe-removebg-preview.png';

const Footer = () => {
    return (
        <footer
        class="bg-[#5b4b45] text-white flex flex-row justify-center md:justify-between items-center py-6 md:py-12 px-28 md:px-8 lg:px-28 w-full">
        <div class="flex flex-col justify-center items-center">
            <img src={imagenfooter} class="w-32" alt="" />


            <div class="flex flex-row">
                <i class="fa-brands fa-facebook text-white text-2xl p-5"></i>
                <i class="fa-brands fa-instagram text-white text-2xl p-5"></i>
                <i class="fa-brands fa-whatsapp text-white text-2xl p-5"></i>
            </div>
        </div>
        <div class="flex flex-col hidden md:block">
            <h1 class="font-bold text-lg">Follow us</h1>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>

        <div class="flex flex-col hidden md:block">
            <h1 class="font-bold text-lg">Contact Info</h1>
            <p>contactinfo@gmail.com</p>
            <p>+503 87989898</p>
            <p>1234 street name, city, country</p>
        </div>
        <div class="flex flex-col hidden md:block">
            <h1 class="font-bold text-lg">Navigation</h1>
            <p>Home</p>
            <p>Services</p>
            <p>About us</p>
        </div>
    </footer>
    )
}

export default Footer;