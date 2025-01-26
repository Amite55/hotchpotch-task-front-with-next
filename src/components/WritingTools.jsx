import Image from 'next/image';
import React from 'react';
import image1 from "../../acetes/image 318.png"
import image2 from "../../acetes/image 319.png"
import image3 from "../../acetes/image 319.svg"
import image5 from "../../acetes/image 320.png"
import image4 from "../../acetes/image 320.svg"
import image6 from "../../acetes/image 321.svg"
import image7 from "../../acetes/image 4444.png"
import image8 from "../../acetes/image 318.png"


const WritingTools = () => {
    return (
        <>
            <section className='container text-center my-10 mx-auto'>
                <h4 className='text-4xl font-bold mb-5'>54 exciting writing tools</h4>
                <p className='text-lg text-[#FAFAFA]'>AI engines take information from various sources and read them like a human would do.</p>
            </section>

            <section className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mx-auto my-10'>
                <div className='bg-[#282a37] flex gap-8 p-6 rounded-lg'>
                    <Image src={image1} alt='' />
                    <span>
                        <h5 className='text-lg font-semibold'>Blog Headlines</h5>
                        <p className='text-sm'>Write a better blog title with our A.I tool.</p>
                    </span>
                </div>
                <div className='bg-[#282a37] flex gap-8 p-6 rounded-lg'>
                    <Image src={image2} alt='' />
                    <span>
                        <h5 className='text-lg font-semibold'>Blog Headlines</h5>
                        <p className='text-sm'>Write a better blog title with our A.I tool.</p>
                    </span>
                </div>
                <div className='bg-[#282a37] flex gap-8 p-6 rounded-lg'>
                    <Image src={image3} alt='' />
                    <span>
                        <h5 className='text-lg font-semibold'>Blog Headlines</h5>
                        <p className='text-sm'>Write a better blog title with our A.I tool.</p>
                    </span>
                </div>
                <div className='bg-[#282a37] flex gap-8 p-6 rounded-lg'>
                    <Image src={image4} alt='' />
                    <span>
                        <h5 className='text-lg font-semibold'>Blog Headlines</h5>
                        <p className='text-sm'>Write a better blog title with our A.I tool.</p>
                    </span>
                </div>
                <div className='bg-[#282a37] flex gap-8 p-6 rounded-lg'>
                    <Image src={image5} alt='' />
                    <span>
                        <h5 className='text-lg font-semibold'>Blog Headlines</h5>
                        <p className='text-sm'>Write a better blog title with our A.I tool.</p>
                    </span>
                </div>
                <div className='bg-[#282a37] flex gap-8 p-6 rounded-lg'>
                    <Image src={image6} alt='' />
                    <span>
                        <h5 className='text-lg font-semibold'>Blog Headlines</h5>
                        <p className='text-sm'>Write a better blog title with our A.I tool.</p>
                    </span>
                </div>
                <div className='bg-[#282a37] flex gap-8 p-6 rounded-lg'>
                    <Image src={image7} alt='' />
                    <span>
                        <h5 className='text-lg font-semibold'>Blog Headlines</h5>
                        <p className='text-sm'>Write a better blog title with our A.I tool.</p>
                    </span>
                </div>
                <div className='bg-[#282a37] flex gap-8 p-6 rounded-lg'>
                    <Image src={image8} alt='' />
                    <span>
                        <h5 className='text-lg font-semibold'>Blog Headlines</h5>
                        <p className='text-sm'>Write a better blog title with our A.I tool.</p>
                    </span>
                </div>
                
            </section>

            <div className='container text-center'>
                <p className='text-lg font-bold'>See all 54 available tools</p>
            </div>
        </>
    );
};

export default WritingTools;