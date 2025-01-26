import React from 'react';

const Packege = () => {
    return (
        <>
            <section className='container text-center mt-16 mx-auto'>
                <h4 className='text-4xl font-bold mb-5'>Make the wise decision for your business</h4>
                <p className='text-lg text-[#FAFAFA]'>Choose from our affordable 3 packages</p>
            </section>


            <div className="min-h-screen bg-gray-900 bg-transparent text-white flex flex-col items-center justify-center px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                  
                    <div className="bg-gray-800 rounded-2xl p-6 space-y-6 text-center">
                        <h3 className="text-xl font-semibold mb-4">Starter Plan</h3>
                        <p className="text-4xl font-bold mb-2">$29<span className="text-lg font-normal">/month</span></p>
                        <p className="text-gray-400 mb-4">This package is suitable for teams 1-15 people.</p>
                        <h4 className="text-lg font-medium mb-2">What's included:</h4>
                        <ul className="text-gray-400 space-y-2 mb-6">
                            <li>10 GB Dedicated Hosting Free</li>
                            <li>Best for Developers, Freelancers</li>
                            <li>1 Year Support</li>
                        </ul>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg">
                            Get Started
                        </button>
                    </div>

                   
                    <div className="bg-gray-800 rounded-2xl p-6 space-y-6 text-center">
                        <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
                        <p className="text-4xl font-bold mb-2">$79<span className="text-lg font-normal">/month</span></p>
                        <p className="text-gray-400 mb-4">This package is suitable for teams 1-50 people.</p>
                        <h4 className="text-lg font-medium mb-2">What's included:</h4>
                        <ul className="text-gray-400 space-y-2 mb-6">
                            <li>15 GB Dedicated Hosting Free</li>
                            <li>Best for Developers, Freelancers</li>
                            <li>5 Year Support</li>
                            <li>Free Custom Domain</li>
                            <li>Basic Statistics</li>
                        </ul>
                        <button className="bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:from-[#5C7FFF] hover:to-[#CB5CFF] duration-300 text-white font-semibold py-2 px-4 rounded-lg">
                            Get Started
                        </button>
                    </div>

                  
                    <div className="bg-gray-800 rounded-2xl p-6 space-y-6 text-center">
                        <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
                        <p className="text-4xl font-bold mb-2">$129<span className="text-lg font-normal">/month</span></p>
                        <p className="text-gray-400 mb-4">This package is suitable for teams 1-100 people.</p>
                        <h4 className="text-lg font-medium mb-2">What's included:</h4>
                        <ul className="text-gray-400 space-y-2 mb-6">
                            <li>20 GB Dedicated Hosting Free</li>
                            <li>Best for Developers, Freelancers</li>
                            <li>Unlimited Support</li>
                            <li>Free Custom Domain</li>
                            <li>Full Statistics</li>
                        </ul>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Packege;