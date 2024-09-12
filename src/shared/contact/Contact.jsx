import React from 'react';

const Contact = () => {
    return (
        <section class="text-gray-400 bg-base-100 body-font relative">
            <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" title="map" class="absolute inset-0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7381.581528129484!2d91.80910859750732!3d22.32375161571125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8b5353672d5%3A0x7e873374534df3f1!2sAgrabad%20Commercial%20Area%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1679872173745!5m2!1sen!2sbd" style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16);" }}></iframe>
                    <div class="bg-base-100 relative flex flex-wrap py-6 rounded shadow-md">
                        <div class="lg:w-1/2 px-6">
                            <h2 class="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                            <p class="mt-1">Agrabad, Chittagong</p>
                        </div>
                        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 class="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                            <a class="text-primary leading-relaxed">mdhasibulctg100@gmail.com</a>
                            <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                            <p class="leading-relaxed">01766848008</p>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 class="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
                    <p class="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                    <div class="relative mb-4">
                        <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
                        <input type="text" id="name" name="name" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                        <input type="email" id="email" name="email" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
                        <textarea id="message" name="message" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button class="text- btn-primary border-0 py-2 px-6 focus:outline-none hover:bg-info rounded text-lg">Button</button>
                    <p class="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;