import Image from 'next/image';
import React from 'react';
import card from "../../acetes/Card-Second.png"

const SecondContent = () => {
    return (
        <section className='w-full container mx-auto md:flex justify-center items-center gap-28 space-y-10 my-10 px-16'>
            <div className='w-full  w-1/2 space-y-8'>
                <h4 className='text-4xl font-semibold'>Write what you want to convey through clear, & authentic writing</h4>
                <p className='text-lg text-[#FAFAFA]'>AI-Writer is the most accurate content generation platform and writing tool that helps you transform your text into a completely personalized.</p>
                <button className="px-6 py-3 text-sm md:text-base font-medium text-white bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:from-[#5C7FFF] hover:to-[#CB5CFF] duration-300 rounded-md shadow-md">
                    Start 14 Days Free Trial
                </button>
            </div>


            <div className=' w-full w-1/2'>
                <Image
                    src={card} alt='Card'
                />
            </div>
        </section>
    );
};

export default SecondContent;