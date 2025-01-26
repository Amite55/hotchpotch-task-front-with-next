import Image from 'next/image';
import React from 'react';
import card from "../../acetes/Card 1.png"
import frame from "../../acetes/Frame 1136abcf.png"


const FastContent = () => {
    return (
        <section className='w-full container mx-auto md:flex justify-center items-center gap-28 space-y-10 my-6 px-16'>
            <div className=' w-full w-1/2'>

                <div className='relative'>
                    <Image 
                    className='card__shadow '
                    width={450} 
                    height={450} 
                    src={card} alt='Card' 
                    />

                     <Image className='absolute bottom-10 right-24' width={410} height={450} src={frame} alt='Card' />
                </div>

               

            </div>


            <div className='w-full  w-1/2 space-y-8'>

                <h4 className='text-4xl font-semibold'>Create content efficiently and quickly with great AI writing tools</h4>
                <p className='text-lg text-[#FAFAFA]'>150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc.</p>
                <button className="px-6 py-3 text-sm md:text-base font-medium text-white bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:from-[#5C7FFF] hover:to-[#CB5CFF] duration-300 rounded-md shadow-md">
                    Start 14 Days Free Trial
                </button>
            </div>
        </section>
    );
};

export default FastContent;