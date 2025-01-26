import React from 'react';
import { FaPlayCircle } from "react-icons/fa";

const Banner = () => {
    return (
        <section className="bg-black text-white min-h-screen bg-gradient-to-r from-[#201732] to-[#231625] flex items-center justify-center px-4">
            <div className="text-center space-y-6 max-w-2xl">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Write better content for your{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600 underline">
                        Facebook Ads
                    </span>
                </h1>

                {/* Subtext */}
                <p className="text-gray-400 text-lg md:text-xl">
                    Artificial intelligence writing tool helps you create blogs, social
                    media websites, and much more.
                </p>

                {/* Buttons */}
                <div className="flex flex-col justify-center items-center space-y-4">
                    <button className="px-6 py-3 text-sm md:text-base font-medium text-white bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:from-[#5C7FFF] hover:to-[#CB5CFF] duration-300 rounded-md shadow-md">
                        Start 14 Days Free Trial
                    </button>


                    <button className="flex items-center space-x-2 text-sm md:text-base text-gray-300 hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] bg-clip-text hover:text-transparent  px-4 p-2">
                        <span className="w-5 h-5 border-2 border-gray-300 rounded-full flex justify-center items-center">
                            <FaPlayCircle className='text-gray-300 ' />
                        </span>
                        <span>Watch A Demo</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;