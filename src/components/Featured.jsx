import React from 'react';

const Featured = () => {
    return (
        <>
            <section className='container text-center my-16 mx-auto'>
                <h4 className='text-4xl font-bold mb-5'>Mixland helps you build beautiful website</h4>
            </section>

            <div className="min-h-scree text-white flex items-center justify-center p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                    {/* Sidebar */}
                    <div className="bg-gray-800 rounded-2xl p-6">
                        <ul className="space-y-2">
                            <li className=" p-3 rounded-lg cursor-pointer bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:from-[#5C7FFF] hover:to-[#CB5CFF] duration-300">Blog Headlines</li>
                            <li className="bg-gray-700 p-3 rounded-lg cursor-pointer hover:bg-gray-600">Blog Intros</li>
                            <li className="bg-gray-700 p-3 rounded-lg cursor-pointer hover:bg-gray-600">Content Rewriter</li>
                            <li className="bg-gray-700 p-3 rounded-lg cursor-pointer hover:bg-gray-600">Facebook Ads</li>
                            <li className="bg-gray-700 p-3 rounded-lg cursor-pointer hover:bg-gray-600">Product Description</li>
                            <li className="bg-gray-700 p-3 rounded-lg cursor-pointer hover:bg-gray-600">PAS Copywriting Formula</li>
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-2 bg-gray-800 rounded-2xl p-6">
                        <h2 className="text-2xl font-semibold mb-6">4 Blog Headlines Generated</h2>
                        <ul className="space-y-4">
                            <li className="bg-gray-700 p-4 rounded-lg">Create original content that ranks for SEO</li>
                            <li className="bg-gray-700 p-4 rounded-lg">Any mechanical keyboard enthusiasts in design?</li>
                            <li className="bg-gray-700 p-4 rounded-lg">The More Important the Work, the More Important the Rest</li>
                            <li className="bg-gray-700 p-4 rounded-lg">How to design a product that can grow itself 10x in year</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Featured;